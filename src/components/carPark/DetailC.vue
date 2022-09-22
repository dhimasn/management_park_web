<template>
    <div class="posts">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <div v-if="errors.length">
                        <div v-for="error in errors" :key="error.index" class="alert alert-danger mt-1" role="alert">
                            {{ error }}
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            Detail Bayar Parkir
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label>Nomor Registrasi</label>: {{post.no_registrasi}}
                                </div>
                                
                                <div class="form-group">
                                    <label>Arrival</label>: {{post.arrival}}
                                </div>

                                <div class="form-group">
                                    <label>Lama Parkir</label>: {{post.lama}}
                                </div>

                                <div class="form-group">
                                    <label>Biaya</label>: {{post.biaya}}
                                </div>

                            </form>
                            <p></p>
                            <router-link :to="{name:'/'}" class="btn btn-md btn-success mr-2">stay</router-link>
                            <button @click.prevent="PostUpdate(post.id)" class="btn btn-md btn-danger">left</button>
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
        data() {
            return {
                post: {},
                errors: []
            }
        },
        created() {
          axios.get(`http://localhost:3000/car_park/get/${this.$route.params.id}`).then(response => {
              this.post = response.data.data;
          });
        },methods:{
            PostUpdate(id)
            {
                axios.put(`http://localhost:3000/car_park/${id}`)
                    .then(() => {
                        this.$router.push('/')
                    }).catch(error => {
                    console.log(error.response);
                });
            }
        }
    }
</script>