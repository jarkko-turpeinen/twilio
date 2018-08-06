global.logger = {
    info: (text) => {console.log(new Date(), "level=INFO", text)},
    debug: (text) => {console.log(new Date(), "level=DEBUG", text)},
    warn: (text) => {console.log(new Date(), "level=WARN", text)},
    error: (text) => {console.log(new Date(), "level=ERROR", text)},
    fatal: (text) => {console.log(new Date(), "level=FATAL", text)},
    trace: (text) => {console.log(new Date(), "level=TRACE", text)},
}