import { pool } from "src/db/database";
import { get, post } from "src/routes/story/visits";

jest.mock("src/db/database");

let req;
let res;

beforeEach(() => {
  expect.hasAssertions();

  req = {
    user: {
      id: 1
    }
  };

  res = {
    send: jest.fn().mockName("mockSend"),
    status: jest.fn().mockName("mockStatus"),
    end: jest.fn().mockName("mockEnd")
  };

  pool.query = jest.fn().mockName("query");
});

test("handles new visit", () => {
  pool.query.mockResolvedValueOnce({});

  req.body = {
    storyId: "foo",
    nodeName: "bar",
    previousNodeName: "baz"
  };

  return post(req, res).then(() => {
    expect(res.status).toHaveBeenCalledWith(200);

    const [queryString, parameters] = pool.query.mock.calls[0];
    expect(queryString).toMatch(/(.|\n)*INSERT INTO visitations(.|\n)*;/);
    expect(parameters).toEqual(
      expect.arrayContaining([1, "foo", "bar", "baz"])
    );
  });
});

test("handles new visit failure", () => {
  pool.query.mockRejectedValueOnce("bad thing happened");

  req.body = {
    storyId: "foo",
    nodeName: "bar",
    previousNodeName: "baz"
  };

  return post(req, res).then(() => {
    expect(res.status).toHaveBeenCalledWith(500);

    const [queryString, parameters] = pool.query.mock.calls[0];
    expect(queryString).toMatch(/(.|\n)*INSERT INTO visitations(.|\n)*;/);
    expect(parameters).toEqual(
      expect.arrayContaining([1, "foo", "bar", "baz"])
    );
  });
});

test("handles returning visits", () => {
  pool.query.mockResolvedValueOnce({
    rows: ["quux"]
  });

  return get(req, res).then(() => {
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.end).toHaveBeenCalledWith(JSON.stringify(["quux"]));

    const [queryString, parameters] = pool.query.mock.calls[0];
    expect(queryString).toMatch(
      /(.|\n)*SELECT DISTINCT story_id, node_name(.|\n)*FROM visitations(.|\n)*WHERE(.|\n)*GROUP BY story_id, node_name;/
    );
    expect(parameters).toEqual(expect.arrayContaining([1]));
  });
});

test("handles returning visits failure", () => {
  pool.query.mockRejectedValueOnce("bad thing happened");

  return get(req, res).then(() => {
    expect(res.status).toHaveBeenCalledWith(500);

    const [queryString, parameters] = pool.query.mock.calls[0];
    expect(queryString).toMatch(
      /(.|\n)*SELECT DISTINCT story_id, node_name(.|\n)*FROM visitations(.|\n)*WHERE(.|\n)*GROUP BY story_id, node_name;/
    );
    expect(parameters).toEqual(expect.arrayContaining([1]));
  });
});
