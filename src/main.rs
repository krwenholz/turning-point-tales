#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use]
extern crate rocket;
#[macro_use]
extern crate log;
#[macro_use(slog_o)]
extern crate slog;
extern crate slog_async;
extern crate slog_json;
extern crate slog_scope;
extern crate slog_stdlog;

use slog::Drain;
use std::env;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

fn main() {
    let is_development = env::var("ENVIRONMENT")
        .ok()
        .unwrap_or("PRODUCTION".to_owned())
        == "DEVELOPMENT";
    let drain = slog_json::Json::new(std::io::stderr())
        .set_pretty(is_development)
        .add_default_keys()
        .add_key_value(slog_o!("version" => env!("CARGO_PKG_VERSION")))
        .build()
        .fuse();
    let drain = slog_async::Async::new(drain).build().fuse();
    let logger = slog::Logger::root(drain, slog_o!());
    let _scope_guard = slog_scope::set_global_logger(logger);
    let _log_guard = slog_stdlog::init().unwrap();

    info!("Starting rocket server.");
    rocket::ignite().mount("/", routes![index]).launch();
}
