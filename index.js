module.exports = {
    plugins: ["this"],
    rules: { //Then load our rules as well
        //"react/no-danger": "error", --> Example, Turn on the no-danger react rule from the plugin
        "this/no-this": "error", // Turn on the no-this rule from the plugin
        "no-console": "off",
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}