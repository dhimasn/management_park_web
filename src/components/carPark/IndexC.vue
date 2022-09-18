<template>
  <div class="posts">
      <div class="container mt-5">
          <div class="row justify-content-center">
              <div class="col-md-12">
                  <div class="card">
                      <div class="card-header">
                          Daftar Layanan Parkir
                      </div>
                      <div class="card-body">
                          <router-link :class="['btn btn-md btn-success mb-2']" to="/create">TAMBAH POST</router-link>
                          <hr>
                          <div class="table-responsive mt-2">

                              <table class="table table-hover table-bordered">
                                  <thead>
                                  <tr>
                                      <th>No Registrasi</th>
                                      <th>Arrival</th>
                                      <th>Departure</th>
                                      <th>Status</th>
                                      <th>Biaya</th>
                                      <th>Aksi</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr v-for="(post, id) in posts" :key="post.id">
                                      <td>{{ post.no_registrasi }}</td>
                                      <td>{{ post.arrival }}</td>
                                      <td>{{ post.departure }}</td>
                                      <td>{{ post.status }}</td>
                                      <td>{{ post.biaya }}</td>
                                      <td class="text-center">
                                          <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-sm btn-primary mr-2">UPDATE</router-link>
                                          <button @click.prevent="PostDelete(post.id, id)" class="btn btn-sm btn-danger">HAPUS</button>
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
      name: 'IndexC',
      data() {
          return {
              posts: []
          }
      },
      created() {
          axios.get('http://localhost:3000/car_parks').then(response => {
              this.posts = response.data.data;
          });
      }
  }
</script>