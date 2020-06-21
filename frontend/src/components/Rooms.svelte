<script>
  let rooms = [
    { id: 'cc06ac22-e8ae-460b-84fc-b1e86074b07f', name: 'Grid' },
    { id: 'cc06ac22-e8ae-460b-84fc-b1e86074b07f', name: 'Encom Tower' },
    { id: 'cc06ac22-e8ae-460b-84fc-b1e86074b07f', name: 'Flynn\'s Arcade' },
    { id: 'cc06ac22-e8ae-460b-84fc-b1e86074b07f', name: 'End of Line Club' },
    { id: 'cc06ac22-e8ae-460b-84fc-b1e86074b07f', name: 'Light Cycle Grid' },
    { id: 'cc06ac22-e8ae-460b-84fc-b1e86074b07f', name: 'I/O Tower' },
    { id: 'cc06ac22-e8ae-460b-84fc-b1e86074b07f', name: 'Disc Arena' },
    { id: 'cc06ac22-e8ae-460b-84fc-b1e86074b07f', name: 'Tron City' },
    { id: 'cc06ac22-e8ae-460b-84fc-b1e86074b07f', name: 'Sea of Simulation' },
  ]
</script>


<style>
  .room-card {
    margin-bottom: 20px;
  }

  .plus-button {
    display: inline-block;
    width: 36px;
    height: 36px;
    margin-top: 10px;
    background-color: #888;
    border-radius: 50%;
    text-align: center;
    _font-size: 48px;
    text-decoration: none;
    color: #fff;
    line-height: 30px;
  }
</style>


<div class="container">
  <div class="row">
    {#each rooms as room}
    <div class="col-sm">
      <div class="card room-card text-white bg-dark" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{room.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Lorem ipsum dolor sit amet</h6>
          <p class="card-text">
            <img src={`https://i.pravatar.cc/36?u=${Math.floor(Math.random()*100)}`} class="rounded-circle" />
            <img src={`https://i.pravatar.cc/36?u=${Math.floor(Math.random()*100)}`} class="rounded-circle" />
            <img src={`https://i.pravatar.cc/36?u=${Math.floor(Math.random()*100)}`} class="rounded-circle" />
            <img src={`https://i.pravatar.cc/36?u=${Math.floor(Math.random()*100)}`} class="rounded-circle" />
            <a class="plus-button">+</a>
          </p>
          <a class="card-link btn btn-dark btn-sm">Enter Meeting</a>
          <a class="card-link btn btn-dark btn-sm">Enter Room</a>
        </div>
      </div>
    </div>
    {/each}
  </div>
</div>

