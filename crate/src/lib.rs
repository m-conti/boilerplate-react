extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn greet() -> String {
    use web_sys::console;

    console::log_1(&"Hello using web-sys".into());
    "Return of wasm".into()
}
