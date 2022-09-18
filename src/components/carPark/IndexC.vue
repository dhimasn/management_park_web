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
                      <div v-if="errors.length">
                        <div v-for="error in errors" :key="error.index" class="alert alert-danger mt-1" role="alert">
                            {{ error }}
                        </div>
                      </div>
                      <form @submit.prevent="PostStore" >
                            <div class="form-group">
                                <table>
                                    <th>
                                        <input type="text" placeholder="Registrasi" v-model="create.no_registrasi" class="form-control"/>
                                    </th>
                                    <th>
                                        <button type="submit" class="btn btn-md btn-success mr-2">Parkir Mobil</button>
                                    </th>    
                                </table>
                            </div>
                      </form>
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
                                          <button  class="btn btn-sm btn-info mr-2" >summary</button>
                                          <button @click.prevent="PostDelete(post.id, id)" class="btn btn-sm btn-danger">hapus</button>
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
                create:{},
                posts: [],
                errors: []
            }
      },
      created() {
          axios.get('http://localhost:3000/car_parks').then(response => {
              this.posts = response.data.data;
          });
      },
      methods: {
        PostStore(e) {
            if (this.create.no_registrasi) {
                axios.post('http://localhost:3000/car_park', this.create)
                    .then(() => {
                        this.$router.go()
                    }).catch(error => {
                        console.log(error.response);
                    });
                }

                this.errors = [];

                if (!this.create.no_registrasi) {
                    this.errors.push('Masukkan No Registrasi');
                }
                e.preventDefault();

        },
        PostDelete(id, index)
        {
            axios.delete(`http://localhost:3000/car_park/${id}`)
                .then(response => {
                    this.posts.splice(index, 1);
                    console.log(response);
                }).catch(error => {
                console.log(error.response);
            });
        }
      }
  }
</script>