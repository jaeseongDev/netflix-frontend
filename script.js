document.addEventListener('DOMContentLoaded', function() {
  const movieList = document.getElementById('movie-list');

  // API URL
  const apiUrl = 'http://13.125.231.146:3000';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data); // 데이터 확인용, 실제로는 필요한 데이터를 추출하여 처리

      // 여기서 데이터를 가공하여 영화 목록을 생성
      data.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const movieHTML = `
          <div>
            <h2>${movie.name}</h2>
            <p>등록일: ${new Date(movie.createdAt).toLocaleDateString()}</p>
            <p>수정일: ${new Date(movie.updatedAt).toLocaleDateString()}</p>
          </div>
        `;

        movieDiv.innerHTML = movieHTML;
        movieList.appendChild(movieDiv);
      });
    })
    .catch(error => {
      console.error('데이터를 불러오는 도중 오류가 발생했습니다.', error);
    });
});
