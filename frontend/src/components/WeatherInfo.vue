<template>
  <div class="weather">
    <i class="fas fa-location-arrow" @click="loadLocation">
      <span>{{ currentWeather }}</span>
    </i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: null,
      country: null,
      weather: {
        desc: null,
        icon: null,
        temp: null
      }
    }
  },
  methods: {
    fetchWeather(lat, lon) {
      this.$axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.VUE_APP_WEATHER_API_KEY}&units=metric`
        )
        .then(({ data }) => {
          const weather = data
          this.city = weather.name
          this.country = weather.sys.country
          this.weather.desc = weather.weather[0].description
          this.weather.icon = weather.weather[0].icon
          this.weather.temp = weather.main.temp
        })
    },
    loadLocation() {
      const storedCoords = JSON.parse(localStorage.getItem('coords')) || null
      if (storedCoords === null) {
        this.getCurrentLocation()
      }
      this.fetchWeather(storedCoords.lat, storedCoords.lon)
    },
    saveLocation(lat, lon) {
      const obj = {
        lat,
        lon
      }
      localStorage.setItem('coords', JSON.stringify(obj))
    },
    geoSuccess(pos) {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      this.saveLocation(lat, lon)
    },
    geoError() {},
    getCurrentLocation() {
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError)
    }
  },
  computed: {
    currentTemp() {
      return Math.ceil(this.weather.temp)
    },
    currentWeather() {
      return this.country
        ? `${this.currentTemp}° ${this.weather.desc} @ ${this.city}, ${this.country}`
        : '날씨 불러오기'
      //   return `${this.currentTemp}° ${this.weather.desc} @ ${this.city}, ${this.country}`
    }
  }
}
</script>

<style lang="scss" scoped>
.weather {
  position: absolute;
  padding: 15px 20px;
}
i {
  span {
    margin-left: 8px;
  }
}
i:hover {
  cursor: pointer;
}
</style>
