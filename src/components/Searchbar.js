const Searchbar = ({keyword, onChange}) => {
    return (
        <>
         <form class="d-flex" role="search">
        <input key="search-bar" value={keyword} onChange={(e) => onChange(e.target.value)} class="form-control me-2" type="search" placeholder="Search News" aria-label="Search"/>
        {/* <button class="btn btn-outline-success" type="button">Search</button> */}
      </form>
      </>
    );
  }
  export default Searchbar;