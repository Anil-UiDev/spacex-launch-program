import "./Filter.css";

const Filter = ({successFilter, resetFilter}) => {

    const handleFilter = (e) => {
      successFilter(e.currentTarget.value, e.currentTarget.name, e.currentTarget.id)
    }

    const clearFilter = () => {
      resetFilter(localStorage.clear())
      let filterArray = ['launch_year', 'land_success', 'launch_success']
      for(let i=0; i<filterArray.length; i++){
        let filterName = filterArray[i]
        let element = document.getElementsByName(filterName)
        for(let i =0; i<element.length; i++){
          element[i].checked = false
        }
      }
    }

  return (
    <>
      <div className="col-md-3 rounded-2 bg-white py-2 filter-section-container relative mb-2">
        <div className="filter-section sticky-top">
          <div className="row mb-2">
            <div className="col-sm-6">
              <strong className="d-block w-100">Filters</strong>
            </div>
            <div className="col-sm-6 text-end">
              <div className="btn btn-outline-primary btn-sm" onClick={clearFilter}>Clear Filters</div>
            </div>
          </div>
          <form>
            <div className="filter-area">
              <h3>Launch Year</h3>
              <div className="custom-radio">
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2006" value="2006" />
                <label htmlFor="2006" className="btn btn-success btn-sm text-dark">2006</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2007" value="2007" />
                <label htmlFor="2007" className="btn btn-success btn-sm text-dark">2007</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2008" value="2008" />
                <label htmlFor="2008" className="btn btn-success btn-sm text-dark">2008</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2009" value="2009" />
                <label htmlFor="2009" className="btn btn-success btn-sm text-dark">2009</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2010" value="2010" />
                <label htmlFor="2010" className="btn btn-success btn-sm text-dark">2010</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2011" value="2011" />
                <label htmlFor="2011" className="btn btn-success btn-sm text-dark">2011</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2012" value="2012" />
                <label htmlFor="2012" className="btn btn-success btn-sm text-dark">2012</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2013" value="2013" />
                <label htmlFor="2013" className="btn btn-success btn-sm text-dark">2013</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2014" value="2014" />
                <label htmlFor="2014" className="btn btn-success btn-sm text-dark">2014</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2015" value="2015" />
                <label htmlFor="2015" className="btn btn-success btn-sm text-dark">2015</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2016" value="2016" />
                <label htmlFor="2016" className="btn btn-success btn-sm text-dark">2016</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2017" value="2017" />
                <label htmlFor="2017" className="btn btn-success btn-sm text-dark">2017</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2018" value="2018" />
                <label htmlFor="2018" className="btn btn-success btn-sm text-dark">2018</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2019" value="2019" />
                <label htmlFor="2019" className="btn btn-success btn-sm text-dark">2019</label>
                <input type="radio" className="btn-check" name="launch_year" onClick={handleFilter} id="2020" value="2020" />
                <label htmlFor="2020" className="btn btn-success btn-sm text-dark">2020</label>
              </div>
            </div>
            <div className="filter-area">
              <h3>Successful Launch</h3>
              <div className="custom-radio">
                <input type="radio" className="btn-check" name="launch_success" onClick={handleFilter} id="launchtrue" value="true" />
                <label htmlFor="launchtrue" className="btn btn-success btn-sm text-dark">True</label>
                <input type="radio" className="btn-check" name="launch_success" onClick={handleFilter} id="launchfalse" value="false" />
                <label htmlFor="launchfalse" className="btn btn-success btn-sm text-dark">False</label>
              </div>
            </div>
            <div className="filter-area">
              <h3>Successful Landing</h3>
              <div className="custom-radio">
                <input type="radio" className="btn-check" name="land_success" onClick={handleFilter} id="landtrue" value="true" />
                <label htmlFor="landtrue" className="btn btn-success btn-sm text-dark">True</label>
                <input type="radio" className="btn-check" name="land_success" onClick={handleFilter} id="landfalse" value="false" />
                <label htmlFor="landfalse" className="btn btn-success btn-sm text-dark">False</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;
