/**************************************************************************/
/**********************************Reset Inputs******************************/
/**************************************************************************/
/**
* @license jQuery inputs reset plugin v1.0.0 09/11/2014
* http://www.totpe.ro
*
* Copyright (c) 2014, Iulian Alexe (contact@totpe.ro)
**/
//Use Exemple:

//$(".sortingWrapper").resetInputs({ //options
//    'ignor': '#div'
//});

//OR:

//$(".sortingWrapper").resetInputs();
(function ($) {
    var clearFormFunc = function (element, options) {
        // Element collection
        this.$element = $(element);

        this.options = $.extend(true, {}, $.fn.resetInputs.defaults, options);

        this.$element = this.$element
            .not(":button, :submit, :reset, :hidden" + (this.options.ignor.length > 0 ? " ," : "") + this.options.ignor);

        if (this.$element.is("input")) {
            if (this.$element.is("input.tt-input")) {
                this.$element.typeahead("val", "");
            } else {
                this.$element.val("");
            }
        } else {
            this.$element
                .find("input")
                    .filter(":text, :password, :file")
                        .val("")
                    .end()
                    .filter(":checkbox, :radio")
                        .removeAttr("checked")
                    .end()
                .end()
                .filter("input[type=number]")
                    .val("0")
                .end()
                .find("textarea")
                    .val("")
                .end()
                .find("select")
                    .prop("selectedIndex", -1)
                    .find("option:selected")
                    .removeAttr("selected");
        }
        return this;
    };

    $.fn.resetInputs = function (options) {
        return new clearFormFunc(this, options);
    };

    $.fn.resetInputs.defaults = {
        ignor: ""
    };
})(window.jQuery);
