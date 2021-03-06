module.exports = {
    extends: ["stylelint-config-recommended"],
    plugins: ["stylelint-order", "stylelint-scss"],
    rules: {
        "at-rule-no-unknown": null,
        "color-hex-length": "short",
        "color-named": "never",
        "comment-empty-line-before": null,
        indentation: 2,
        "max-line-length": 100,
        "max-nesting-depth": 5,
        "no-descending-specificity": null,
        "no-eol-whitespace": [
            true,
            {
                ignore: ["empty-lines"],
            },
        ],
        "order/order": [
            {
                type: "at-rule",
                name: "include",
            },
            {
                type: "at-rule",
                name: "extend",
            },
            "custom-properties",
            "dollar-variables",
            "declarations",
            "rules",
            {
                type: "at-rule",
                name: "media",
            },
        ],
        "order/properties-alphabetical-order": true,
        "shorthand-property-no-redundant-values": null,
        "selector-list-comma-newline-after": "always-multi-line",
        "string-quotes": "single",
        "value-list-comma-newline-after": "always-multi-line",
    },
};
