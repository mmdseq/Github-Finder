class Github{
  constructor(){
    this.client_id = '69d628dd84c97916773d';
    this.client_secret='0ba9929e1271df90db66f3292bfd7d72549fcc29';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
      //repos: repos , same above 
    }
  }
}






 



