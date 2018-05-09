$( document ).ready(function() {
    console.log(111);
    $("form").validate({
        rules: {
            query: "required",
            count: {
                required: true,
                min:1
            },
            from: {
                min:0,
                checkAgeFrom: true
            },
            to: {
                min:1,
                checkAgeTo: true
            },
            network: {
                required: true,
                min:1
            }
        },
        messages: {
            network: {
                min: "Выберите социальную сеть"
            },
            count: {
                min: "Count must be more then 0"
            },

        }
    });
});

jQuery.validator.addMethod("checkAgeTo", function(value, element) {
    return this.optional(element) || $('[name="from"]').val()=='' || parseInt($('[name="from"]').val())<=parseInt(value);
}, "Age to must be more than age from");

jQuery.validator.addMethod("checkAgeFrom", function(value, element) {
    return this.optional(element) || $('[name="to"]').val()=='' || parseInt($('[name="to"]').val())>=parseInt(value);
}, "Age to must be more than age from");
