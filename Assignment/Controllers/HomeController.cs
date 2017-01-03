using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Assignment.Controllers
{
    public class HomeController : Controller
    {
        // GET: Book
        public ActionResult Index()
        {
            return View();
        }

        // GET: All books
        public JsonResult GetAllUsers()
        {
            using (UserDBContext contextObj = new UserDBContext())
            {
                var userList = contextObj.Users.ToList();
                return Json(userList, JsonRequestBehavior.AllowGet);
            }
        }
        //GET: Book by Id
        public JsonResult GetUserById(string id)
        {
            using (UserDBContext contextObj = new UserDBContext())
            {
                var userId = Convert.ToInt32(id);
                var getUserById = contextObj.Users.Find(userId);
                return Json(getUserById, JsonRequestBehavior.AllowGet);
            }
        }
        //Update Book
        public string UpdateUser(User user)
        {
            if (user != null)
            {
                using (UserDBContext contextObj = new UserDBContext())
                {
                    int userId = Convert.ToInt32(user.Id);
                    User _user = contextObj.Users.Where(b => b.Id == userId).FirstOrDefault();
                    _user.Name = user.Name;
                    _user.FName = user.FName;
                    _user.City = user.City;
                    _user.Country = user.Country;
                    contextObj.SaveChanges();
                    return "User record updated successfully";
                }
            }
            else
            {
                return "Invalid User record";
            }
        }
        // Add book
        public string AddUser(User user)
        {
            if (user != null)
            {
                using (UserDBContext contextObj = new UserDBContext())
                {
                    contextObj.Users.Add(user);
                    contextObj.SaveChanges();
                    return "User record added successfully";
                }
            }
            else
            {
                return "Invalid user record";
            }
        }
        // Delete book
        public string DeleteUser(string userId)
        {

            if (!String.IsNullOrEmpty(userId))
            {
                try
                {
                    int _userId = Int32.Parse(userId);
                    using (UserDBContext contextObj = new UserDBContext())
                    {
                        var _user = contextObj.Users.Find(_userId);
                        contextObj.Users.Remove(_user);
                        contextObj.SaveChanges();
                        return "Selected user record deleted sucessfully";
                    }
                }
                catch (Exception)
                {
                    return "user details not found";
                }
            }
            else
            {
                return "Invalid operation";
            }
        }

    }
}