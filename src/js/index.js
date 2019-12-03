import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name}
              ${variables.lastname}
          </h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}
              ${variables.country}
          </h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="${
              variables.twitter
            }"><i class="fa fa-twitter"></i></a></li>
            <li><a href="${
              variables.github
            }"><i class="fa fa-github"></i></a></li>
            <li><a href="${
              variables.linkedin
            }"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="${
              variables.instagram
            }"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://66.media.tumblr.com/9cf8d717a9a48ca2d8db9dc7aaa276bb/tumblr_mzo0rtdzWm1shjuxjo7_r1_400.gifv",
    // this is the url for the profile avatar
    avatarURL:
      "https://imgix.bustle.com/rehost/2016/9/13/19072080-d6e6-47a4-98d3-47fe27f29b4c.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
    // social media bar position (left or right)
    socialMediaPosition: "Right",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: "First,",
    lastname: "Last",
    role: "Role",
    country: "Country",
    city: "City"
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "no"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
