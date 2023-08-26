<template>
    <div class="profile">
      <section class="pic">
        <img class="rounded-full h-20" v-if="profile" :src="profile" alt="profile pic"> 
        <img class="rounded-full h-20" v-else-if="!profile" src="@/assets/images/default-profile.png" alt="default profile image">
      </section>
      <section class="upload">
        <input type="file" @change="onFileSelected" v-if="updateButtonClicked" placeholder="update">
        <button @click="updateClicked">Update</button>
      </section>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  
  const updateButtonClicked = ref(false)
  const selectedFile = ref(null);
  const profile = ref(null); 
  
  
  const onFileSelected = event => {
    selectedFile.value = event.target.files[0];
  };
  
  const onFileUpload = async () => {
    const token = localStorage.getItem('token');
    const fd = new FormData();
    fd.append('image', selectedFile.value);
  
    try {
      const response = await axios.post('http://localhost:8000/api/pictures/', fd, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Assuming the API returns the URL to the uploaded image in the response
      profile.value = response.data.profilePic;
      updateButtonClicked.value = false
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  
  const getProfilePic = async () => {
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.get('http://localhost:8000/api/pictures/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      profile.value = response.data.profilePic;
    } catch (error) {
      console.error('Error fetching profile picture:', error);
    }
  };
  
  const updateClicked = () => {
    updateButtonClicked.value = true;
    onFileUpload()
  }
  
  
  getProfilePic();
  </script>
  