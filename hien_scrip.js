"use strick";
function Hien_FnContent() {
  const hien_container = document.getElementById("hien_container");
  hien_container.innerHTML = `<div id="hien_Forecasted" class="hien_ForecastedStyle row">
  <div
    id="hien_Forecasted__left"
    class="hien_ForecastedStyle_left col-sm-3 col-md col-lg-3"
  >
    <div
      id="hien_Forecasted__left_top"
      class="hien_ForecastedStyle_left_top"
    >
      <p>Weather data</p>
      <h2>Forecasted weather data</h2>
    </div>
    <div
      id="hien_Forecasted__left_bottom"
      class="hien_ForecastedStyle_left_bottom"
    >
      <div
        id="hien_Forecasted__left_bottom--boxcontainer"
        class="hien_ForecastedStyle_left_bottom--boxcontainer"
      >
        <p
          class="hien_Forecasted__left_bottom--boxcontainer_p backwhile colerorange backgroundorange"
        >
          1 min for 2 hours
        </p>
        <p class="araworange"></p>
        <p class="hien_Forecasted__left_bottom--boxcontainer_p">Globle</p>
      </div>
      <div
        id="hien_Forecasted__left_bottom--boxcontainer"
        class="hien_ForecastedStyle_left_bottom--boxcontainer"
      >
        <p
          class="hien_Forecasted__left_bottom--boxcontainer_p backgroundgray backwhile"
        >
          1 min for 2 hours
        </p>
        <p class="araw"></p>
        <p class="hien_Forecasted__left_bottom--boxcontainer_p">Globle</p>
      </div>
      <div
        id="hien_Forecasted__left_bottom--boxcontainer"
        class="hien_ForecastedStyle_left_bottom--boxcontainer"
      >
        <p
          class="hien_Forecasted__left_bottom--boxcontainer_p backgroundgray backwhile"
        >
          1 min for 2 hours
        </p>
        <p class="araw"></p>
        <p class="hien_Forecasted__left_bottom--boxcontainer_p">Globle</p>
      </div>
      <div
        id="hien_Forecasted__left_bottom--boxcontainer"
        class="hien_ForecastedStyle_left_bottom--boxcontainer"
      >
        <p
          class="hien_Forecasted__left_bottom--boxcontainer_p backgroundgray backwhile"
        >
          1 min for 2 hours
        </p>
        <p class="araw"></p>
        <p class="hien_Forecasted__left_bottom--boxcontainer_p">Globle</p>
      </div>
    </div>
  </div>
  
  <div
    id="hien_Forecasted__right"
    class="hien_ForecastedStyle_right col-sm-3 col-md col-lg-3"
  >
    <div
      id="hien_Forecasted__right_top"
      class="hien_ForecastedStyle_right_top"
    >
      <p>
        Detailed forecasts available by city name, city ID, geographic
      </p>
      <p>coordinates or postal/ZIP code.</p>
    </div>
    <div
      id="hien_Forecasted__right_bottom"
      class="hien_ForecastedStyle_right_bottom"
    >
      <h3>How to obtain</h3>
      <div>
        <p>API</p>
        <p>Bulks</p>
      </div>
      <div>
        <p>
          A variety of subscriptions with various limits on calls/min,
        </p>
        <p>data availability, and service</p>
      </div>
    </div>
  </div>
  </div>
  
  <div id="hien_Historical" class="hien_HistoricalStyle row">
  <div
    id="hien_Historical_left"
    class="hien_HistoricalStyle--left col-sm-3 col-md col-lg-3"
  >
    <p>
      Our technology <b>Time Machine</b> ,has allowed us to enhance data
      in the Historical Weather Collection: historical weather data is now
      available for any coordinates and the depth of historical data has
      been extended to 40 years.
    </p>
    <h3>How to obtain</h3>
    <div class="maketplace">
      <h4>Marketplace of prepared data sets</h4>
      <p>(cities, zip codes, grids)</p>
    </div>
    <div class="maketplace">
      <h4>On-the-fly bulks</h4>
      <p>for customized lists of coordinates</p>
    </div>
    <div class="maketplace">
      <p>
        <b>APIs</b> (city-based, up to 1 year back; subscriptions with
        various limits on calls/min, data availability, and service)
      </p>
    </div>
  </div>
  <div
    id="hien_Historical_right"
    class="hien_HistoricalStyle--right col-sm-3 col-md col-lg-3"
  >
    <p>Weather data</p>
    <h2>Historical weather data</h2>
    <img src="./globle_grab/historical_data.png" alt="content" />
  </div>
  </div>`;
}
export default Hien_FnContent;
