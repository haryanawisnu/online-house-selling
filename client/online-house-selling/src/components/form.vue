<template>
<div class="form">
  <div class="content-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>Form</h2>
          <hr class="star-primary">
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
          <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
          <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
          <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Title</label>
              <input v-model="house.title" type="text" class="form-control" placeholder="Title">
            </div>
          </div>
          <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Price</label>
              <input v-model="house.price" type="text" class="form-control" placeholder="Price">
            </div>
          </div>
          <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Name</label>
              <input v-model="house.name" type="text" class="form-control" placeholder="Name">
            </div>
          </div>
          <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Phone Number</label>
              <input v-model="house.phone" type="tel" class="form-control" placeholder="Phone Number">
            </div>
          </div>
          <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Image</label>
              <input v-model="house.img" type="text" class="form-control" placeholder="Image Url">
            </div>
          </div>
          <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Description</label>
              <textarea v-model="house.description" rows="5" class="form-control" placeholder="Description"></textarea>
            </div>
          </div>
          <br>
          <div class="row control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <center>
                <gmap-map :center="center" :zoom="16" style="width: 500px; height: 300px" @click="mapClicked">
                  <gmap-marker v-for="m in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
                </gmap-map>
              </center>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="form-group col-xs-12">
              <button @click="action" type="submit" class="btn btn-success btn-lg">{{status}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC5zdktYi1gKTJ_PfP6Ex4P-xHY6X6-e_0'
  }
});
export default {
  name: 'form',
  computed: {
    house() {
      return this.$store.getters.house
    },
    status() {
      return this.$store.getters.status
    }
  },
  data() {
    return {
      center: {
        lat: '',
        lng: ''
      },
      markers: [{
        position: {
          lat: '',
          lng: ''
        }
      }]
    }
  },
  methods: {
    mapClicked(mouseArgs) {
      this.house.lat = mouseArgs.latLng.lat();
      this.house.lang = mouseArgs.latLng.lng();
      // console.log('map lat', mouseArgs.latLng.lat());
      // console.log('map lng', mouseArgs.latLng.lng());
      this.markers.pop();
      this.markers.push({
        position: {
          lat: mouseArgs.latLng.lat(),
          lng: mouseArgs.latLng.lng()
        },
        opacity: 1,
        enabled: true
      });
      let self = this;
      setTimeout(function() {
        let docenter = {
          lat: mouseArgs.latLng.lat(),
          lng: mouseArgs.latLng.lng()
        }
        self.center = docenter;
      }, 2000);

    },
    action() {
      this.$store.dispatch(this.status, this.house)
      this.$router.push('/listview')
    }
  },
  created() {
    this.center.lat = this.house.lat;
    this.center.lng = this.house.lang;
    this.markers[0].position.lat = this.house.lat;
    this.markers[0].position.lng = this.house.lang;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  margin-top: 60px;
}
</style>
