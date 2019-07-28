
# react-native-weather
<h2>TEAM3 React-native project</h2>
<h5>추가 기능 구현</h5>
<ol>
<li>검색 기능 추가</li>
<li>WeatherDetailScreen.js 디자인 개선</li>
</ol>

<h3>1. 검색 기능</h3>
<h4>react-native-elements의 SearchBar를 이용하여 View 내부에 searchbar tag를 생성 후 검색 기능 구현을 위한 searchFilterFunction 작성 </h4>
![searchfunction](https://user-images.githubusercontent.com/32073145/62003138-34ec2480-b14d-11e9-9f10-b1e1f7bcfe08.PNG)



<h3>2. WeatherDetailScreen.js 디자인 개선</h3>
<h4>날씨 데이터에 따른 배경화면 및 날씨 아이콘 구현 (더미 데이터에서 넘어오는 값은 Haze로 고정이므로 우선적으로 Haze인 경우와 snow인 경우만 구현)<br>   let  weather  =  this.state.weather[0].main;을 기준으로 날씨 상태 파악</h4>
<h4>flexDirection과 justifyContent를 적절히 활용하여 온도와 날씨를 좌하단에 표시


