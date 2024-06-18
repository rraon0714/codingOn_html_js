$(() => {
  $(".navbar_toggleBtn").click(function () {
    /**클래스 선택자 생성 active */
    $(".navbar_menu").toggle("active");
  });

  $(
    window.resizeBy(() => {
      //navbar 너비 값이 문자이기 때문에 숫자로 변환
      if (parseInt($(nav).css("width")) > 768) {
        $(".navbar_menu").css("display", "flex");
      }
    })
  );
});
