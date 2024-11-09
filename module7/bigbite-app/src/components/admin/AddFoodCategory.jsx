import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

export default function AddFoodCategory() {
  return (
<>
<body className='dashboard'>
<AdminHeader />
<div className="container-fluid">
<div className="row">
<div className="col-md-3 admin-sidebar p-5">
<AdminSidebar />
</div>
<div className="col-md-9 admin-dashboard">
  <div className="container p-5">
    <div className="row">
      <h3 className="ms-4">
        Add Leaves <span className="bi bi-calendar" />
      </h3>
      <hr className="border border-2 border-primary ms-5 w-50" />
      <div className="col-md-12 ms-4 bg-white shadow p-4 mt-4">
        <form>
          <div className="form-group">
            <label className="fs-5 text-success">Select Employee</label>
            <select name="employee" className="form-control">
              <option value="">-select employee</option>
              <option value="">Brijesh Pandey</option>
            </select>
          </div>
          <div className="row">
            <div className="form-group w-50 col-md-6 mt-3">
              <label className="fs-5 text-success">Asign Leave</label>
              <select name="leaves" className="form-control">
                <option value="">-select Leaves</option>
                <option value="">12</option>
                <option value="">22</option>
                <option value="">25</option>
              </select>
            </div>
            <div className="form-group w-50 col-md-6 mt-3">
              <label className="fs-5 text-success">Select departments</label>
              <select name="leaves" className="form-control">
                <option value="">-select Leaves</option>
                <option value="">12</option>
                <option value="">22</option>
                <option value="">25</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-3">
            <label className="fs-5 text-success">Leave Types</label>
            <select name="employee" className="form-control">
              <option value="">-select Leave type</option>
              <option value="">PL(Paid Leave)</option>
              <option value="">LWP(Leave without Paid)</option>
              <option value="">RH(Reasional Leave)</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <input
              type="submit"
              name="addleave"
              defaultValue="AddLeave"
              className="btn btn-md btn-primary bg-primary text-white"
            />
            <input
              type="submit"
              name="reset"
              defaultValue="Reset"
              className="btn btn-md btn-danger bg-danger text-white ms-2"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</body>
</>
  )
}
