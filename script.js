// 로그인 버튼 클릭 시
document.getElementById("login_button").addEventListener("click", function() {
    // 로그인 버튼과 회원가입 버튼 숨김
    document.getElementById("login_button").style.display = "none";
    document.getElementById("signup_button").style.display = "none";
    // 프로필 버튼 표시
    document.getElementById("profile_button").style.display = "block";
});

// 검색 버튼 클릭 시 동작할 함수
function search() {
    var searchKeyword = document.getElementById("search_input").value;
  
    // 검색 로직을 구현하세요
    // 예시로는 alert으로 검색어를 출력하도록 설정했습니다
    alert("검색어: " + searchKeyword);
  
    // 여기에 검색 결과를 처리하는 로직을 구현하세요
    // 예를 들어, 게시글 목록에서 검색어를 찾아 해당 페이지로 이동하거나 검색 결과를 표시하는 등의 동작을 수행할 수 있습니다
  }
  
  // 검색 버튼 클릭 이벤트 리스너 등록
  document.getElementById("search_button").addEventListener("click", search);
  
  // 검색어 입력란 엔터 키 이벤트 처리
  document.getElementById("search_input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      search();
    }
  });
// 홈 버튼 클릭 이벤트 리스너 등록
document.getElementById("home_button").addEventListener("click", function() {
    // 홈 페이지로 이동 (예시: "home.html" 페이지로 이동)
    window.location.href = "home.html";
  });

  // 슬라이드 인덱스 초기화
  var slideIndex = 0;

  // 점 엘리먼트 가져오기
  var dots = document.getElementsByClassName("dot");

  // 슬라이드 이동 함수
  function moveSlide(index) {
    // 슬라이드 컨테이너 엘리먼트 가져오기
    var slider = document.querySelector(".slider");

    // 슬라이드 이동
    slider.style.transform = "translateX(" + -index * 33.33 + "%)";

    // 현재 활성화된 점 표시
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[index].classList.add("active");
  }

  // 각 점에 클릭 이벤트 리스너 등록
  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
      var index = Array.prototype.indexOf.call(dots, this);
      slideIndex = index;
      moveSlide(index);
    });
  }

  // 슬라이드 자동 이동 (예시: 3초마다 자동으로 슬라이드 이동)
  setInterval(function() {
    slideIndex = (slideIndex + 1) % dots.length;
    moveSlide(slideIndex);
  }, 3000);

