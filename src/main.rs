#[macro_use]
extern crate lambda_runtime as lambda;
#[macro_use]
extern crate log;
#[macro_use]
extern crate serde_derive;
#[macro_use(slog_o)]
extern crate slog;
extern crate slog_async;
extern crate slog_json;
extern crate slog_scope;
extern crate slog_stdlog;

use lambda::error::HandlerError;
use slog::Drain;
use std::env;
use std::error::Error;

#[derive(Deserialize, Clone)]
struct CustomEvent {
    #[serde(rename = "firstName")]
    first_name: String,
}

#[derive(Serialize, Clone)]
struct CustomOutput {
    message: String,
}

fn main() -> Result<(), Box<dyn Error>> {
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

    // Note: this `info!(...)` macro comes from `log` crate
    info!("I'm in main!");
    error!("I'm in main with error!");

    lambda!(my_handler);

    Ok(())
}

fn my_handler(e: CustomEvent, c: lambda::Context) -> Result<CustomOutput, HandlerError> {
    if e.first_name == "" {
        error!("Empty first name in request {}", c.aws_request_id);
        return Err(c.new_error("Empty first name"));
    }

    Ok(CustomOutput {
        message: format!("Hello, {}!", e.first_name),
    })
}
