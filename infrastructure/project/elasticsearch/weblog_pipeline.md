```
PUT _ingest/pipeline/weblog
{
  "description": "Ingest pipeline for Combined Log Format",
  "processors": [{
      "grok": {
        "field": "@message",
        "patterns": [
          "H2WIB_REQUEST_LOG: %{IPORHOST:clientip} - (?:-|%{USER:ident}) \\[%{HTTPDATE:timestamp}\\] \"%{WORD:verb} %{DATA:request} HTTP/%{NUMBER:httpversion}\" %{NUMBER:response:int} (?:-|%{NUMBER:bytes:int}) (?:-|%{QUOTEDSTRING:referrer}) %{QUOTEDSTRING:agent}"
        ]
      }
    },
    {
      "date": {
        "field": "timestamp",
        "formats": [
          "dd/MMM/YYYY:HH:mm:ss Z"
        ]
      }
    },
    {
      "user_agent": {
        "field": "agent"
      }
    }
  ]
}
```

[Helpful](https://www.neant.ro/aws/elasticsearch-basic-setup.html)

Test:

```
POST _ingest/pipeline/weblog/_simulate
{
  "docs": [
    {
      "_source": {
        "@message": "H2WIB_REQUEST_LOG: 73.19.106.40 - - [31/Dec/2019:02:45:26 +0000] \"GET /service-worker.js HTTP/1.1\" 200 - \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:71.0) Gecko/20100101 Firefox/71.0\""
      }
    }
  ]
}
```

```
GET _ingest/pipeline/weblog
```
