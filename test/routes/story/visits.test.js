import {
  pool
} from "src/lib/server/database";
import {
  get,
  post
} from "src/routes/story/visits";

jest.mock('src/lib/server/database');

let req;
let res;

beforeEach(() => {
  expect.hasAssertions();

  req = {
    user: {
      id: 1
    },
  };

  res = {
    send: jest.fn().mockName('mockSend'),
    status: jest.fn().mockName('mockStatus'),
    end: jest.fn().mockName('mockEnd'),
  };

  pool.query = jest.fn().mockName('query');
});

test('handles new visit', () => {
  pool.query.mockResolvedValueOnce({});

  req.body = {
    storyId: 'foo',
    nodeName: 'bar',
    previousNodeName: 'baz',
  };

  return post(req, res).then(() => {
    expect(res.status).toHaveBeenCalledWith(200);

    const [queryString, parameters] = pool.query.mock.calls[0];
    expect(queryString)
      .toMatch(/(.|\n)*INSERT INTO visitations(.|\n)*DO UPDATE SET(.|\n)*;/);
    expect(parameters)
      .toEqual(expect.arrayContaining([1, 'foo', 'bar', 'baz']));
  })
});

test('handles new visit failure', () => {
  pool.query.mockRejectedValueOnce('bad thing happened');

  req.body = {
    storyId: 'foo',
    nodeName: 'bar',
    previousNodeName: 'baz',
  };

  return post(req, res).then(() => {
    expect(res.status).toHaveBeenCalledWith(500);

    const [queryString, parameters] = pool.query.mock.calls[0];
    expect(queryString)
      .toMatch(/(.|\n)*INSERT INTO visitations(.|\n)*DO UPDATE SET(.|\n)*;/);
    expect(parameters)
      .toEqual(expect.arrayContaining([1, 'foo', 'bar', 'baz']));
  })
});

// TODO(kyle): respond visits

test('handles returning visits', () => {
  pool.query.mockResolvedValueOnce(['quux']);

  return get(req, res).then(() => {
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.end).toHaveBeenCalledWith(JSON.stringify(['quux']));

    const [queryString, parameters] = pool.query.mock.calls[0];
    expect(queryString)
      .toMatch(/(.|\n)*SELECT \* FROM visitations(.|\n)*WHERE(.|\n)*;/);
    expect(parameters)
      .toEqual(expect.arrayContaining([1]));
  })
});

test('handles returning visits failure', () => {
  pool.query.mockRejectedValueOnce('bad thing happened');

  return get(req, res).then(() => {
    expect(res.status).toHaveBeenCalledWith(500);

    const [queryString, parameters] = pool.query.mock.calls[0];
    expect(queryString)
      .toMatch(/(.|\n)*SELECT \* FROM visitations(.|\n)*WHERE(.|\n)*;/);
    expect(parameters)
      .toEqual(expect.arrayContaining([1]));
  })
});