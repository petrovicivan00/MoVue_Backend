const addEntry = () => {

    
    const title = document.getElementById("title1").value;
    const genre = document.getElementById("genre1").value;
    const year = document.getElementById("year1").value;
    const season = document.getElementById("season1").value;
    const episode = document.getElementById("episode1").value;
    const rating = document.getElementById("rating1").value;
  
    const requestData = {
        title : title,
        genre : genre,
        year : Number.parseInt(year),
        season : Number.parseInt(season),
        episode : Number.parseInt(episode),
        rating :Double.parseDouble(rating)
    };
  
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3000/api/shows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          if (jwtExpired(data.message)) return;
          alert(JSON.stringify(data.message));
          return;
        }
      });
  };

  const editEntry = () => {

    const showId = document.getElementById("id2").value;
    const title = document.getElementById("title2").value;
    const genre = document.getElementById("genre2").value;
    const year = document.getElementById("year2").value;
    const season = document.getElementById("season2").value;
    const episode = document.getElementById("episode2").value;
    const rating = document.getElementById("rating2").value;
  
    const requestData = {
        showId : showId,
        title : title,
        genre : genre,
        year : Number.parseInt(year),
        season : Number.parseInt(season),
        episode : Number.parseInt(episode),
        rating :Double.parseDouble(rating)
    };
  
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3000/api/shows/" + showId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          if (jwtExpired(data.message)) return;
          alert(JSON.stringify(data.message));
          return;
        }
      });
  };

  const deleteEntry = () => {

    const showId = document.getElementById("id3").value;

    const requestData = {
        showId: showId,
    };
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3000/api/shows/"+ showId , {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          if (jwtExpired(data.message)) return;
          alert(JSON.stringify(data.message));
          return;
        }
      });
  };


  const jwtExpired = (message) => {
    if (message == "jwt expired") {
      alert("Istekao je token");
      window.location.href = "/../../login.html";
      localStorage.clear();
      return true;
    }
    return false;
  };

  const showShows = () =>  {

    const token = JSON.parse(localStorage.getItem("token"));
    fetch('http://localhost:3000/api/shows', {
      method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: `${token}`,
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allShows = document.getElementById('getShows');

            data.forEach( el => {
                allShows.innerHTML += `<li>showId: ${el._id}, title: ${el.title}, 
                    genre: ${el.genre}, year: ${el.year}, season: ${el.season}, episode: ${el.episode},
                    rating: ${el.rating} </li>`;
            });
        });
      }