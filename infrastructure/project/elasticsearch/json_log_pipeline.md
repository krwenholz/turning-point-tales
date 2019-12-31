```
PUT _ingest/pipeline/json_log
{
  "description": "Ingest pipeline for Combined Log Format",
  "processors": [{
      "json": {
        "field": "@message"
      },
      "date": {
        "field": "time",
        "formats": [
          "yyyy-MM-ddThh:mm:ssZ"
        ],
        "ignore_failure": true
      }
    }
  ]
}
```

[Helpful](https://www.neant.ro/aws/elasticsearch-basic-setup.html)

Test:

```
POST _ingest/pipeline/json_log/_simulate
{
  "docs": [
    {
      "_source": {
        "@message": "{\"name\":\"browser\",\"hostname\":\"ba296cca-8295-48b4-a731-48a58cdd516b\",\"pid\":3,\"level\":30,\"url\":\"/1\",\"msg\":\"Unauthenticated access found on url\",\"time\":\"2019-12-31T18:27:07.751Z\",\"v\":0}"
      }
    }
  ]
}
```

```
GET _ingest/pipeline/json_log
```
