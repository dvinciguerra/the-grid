<script>
  import { link } from "svelte-routing";
</script>

<style>
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 48px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }

  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }

  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
      position: -webkit-sticky;
      position: sticky;
    }
  }

  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
  }

  .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #999;
  }

  .sidebar .nav-link.active {
    color: #007bff;
  }

  .sidebar .nav-link:hover .feather,
  .sidebar .nav-link.active .feather {
    color: inherit;
  }

  .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
  }
</style>

<nav id="sidebarMenu" class="col-md-2 d-md-block bg-light sidebar collapse">
  <div class="position-sticky">
    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>Starred</span>
      <a class="link-secondary" href="#" aria-label="Add a new report">
        <span data-feather="plus-circle"></span>
      </a>
    </h6>
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">
          <span data-feather="home"></span>
          <img src={`https://i.pravatar.cc/28?u=${Math.floor(Math.random()*100)}`} class="rounded-circle" /> Sam Flynn
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span data-feather="file"></span>
          <img src={`https://i.pravatar.cc/28?u=${Math.floor(Math.random()*100)}`} class="rounded-circle" /> Quorra
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span data-feather="bar-chart-2"></span>
          <img src={`https://i.pravatar.cc/28?u=${Math.floor(Math.random()*100)}`} class="rounded-circle" /> Alan
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span data-feather="layers"></span>
          <img src={`https://i.pravatar.cc/28?u=${Math.floor(Math.random()*100)}`} class="rounded-circle" /> Kevin
        </a>
      </li>
    </ul>

    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>Users</span>
      <a class="link-secondary" href="#" aria-label="Add a new report">
        <span data-feather="plus-circle"></span>
      </a>
    </h6>
    <ul class="nav flex-column mb-2">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span data-feather="shopping-cart"></span>
          <img src={`https://i.pravatar.cc/28?u=${Math.floor(Math.random()*100)}`} class="rounded-circle" /> Tron
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span data-feather="users"></span>
          <img src={`https://i.pravatar.cc/28?u=${Math.floor(Math.random()*100)}`} class="rounded-circle" /> CLU
        </a>
      </li>
    </ul>
  </div>
</nav>
