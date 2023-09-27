window.onload = () => {
    var check = $("input[type=checkbox]")
    let list = []
    check.each(function(index, element) {
        check.click(function() {
            if (element.checked) {
                list[$(this).attr("data-id")] = ($(this).attr("data-name"))
            }
            else {
                delete list[$(this).attr("data-id")]
            }
            $(" .amenities h4").text(Object.values(list).join(", "))
        })
        })
}