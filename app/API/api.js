import Config from "../config"



var VendorApi = {
    baseApi(sub_url, method, json_data, cb){
        let request = {
            url: Config.BACKEND_API_URL + sub_url,
            method: method,
            headers: {
                Authorization:'Bearer ' + localStorage.token
            },
            contentType:"application/json",
            dataType:"json"
        }
        if ( method == 'POST' || method == 'PUT' ){
            request['data'] = JSON.stringify(json_data);
        }
        console.log(request)
        $.ajax(request).then((res)=>{
            if (cb) cb(null, res)
        }, (error) => {
            if (cb) cb(error.responseJSON , null)
        })
    },

    uploadFile(file, callback, ext, progressCallback) {
        console.log('uploading data is ', file);
        var obj = {
            _filename: file.name,
            size: file.size,
            mimeType: file.type
        };

        if (ext) {
            _.extend(obj, ext);
        }

        var formData = new FormData();
        formData.append('file', file)
        formData.append('filename', file.name)
        formData.append('size', file.size)
        formData.append('mimeType', file.type)

        //console.log('uploading data is ', formData);
        $.ajax({
            url: Config.BACKEND_API_URL + "/api/v1/uploads/image",
            data: formData,
            method: 'post',
            xhr: function () {
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) {
                    myXhr.upload.addEventListener('progress', function (e) {
                        console.log('here', e)
                        if (e.lengthComputable) {
                            var max = e.total;
                            var current = e.loaded;

                            if (progressCallback) {
                                progressCallback(max, current)
                            }
                        }
                    }, false);
                }
                return myXhr;
            },
            cache: false,
            contentType: false,
            processData: false,
            headers: {
                Authorization: 'Basic ' + localStorage.token
            },
            success: function (data) {
                if (data) {
                    callback(data);
                    console.log('data ', data);
                } else {
                    callback('empty data')
                }
            },
            error: function (data) {
                callback(data)
            }
        });
    },



    ///////////////////
    // Authorization //
    ///////////////////

    login(username, password, cb){
        if ( localStorage.token ){
            if ( cb ) cb(null, localStorage.user)
            return;
        }
        this.baseApi('/api/v1/vendor/login', 'POST', {username, password}, (err, res)=>{
            if ( err ){
                cb(err, null);
                return;
            }

            localStorage.token = res.Token;
            localStorage.user = JSON.stringify(res);
            cb(null, res)
        })
    },
    register(userData, cb){
        this.baseApi('/api/v1/vendor/register', 'POST', userData, (err, res)=>{
            if ( err ){
                cb(err, null);
                return;
            }

            //localStorage.token = res.Token;
            //localStorage.user = res;
            cb(null, res)
        })
    },
    changePassword(oldPass, newPass, cb){
        let {user} = this.getCurrentUser()
        let email = user.email;
        this.baseApi('/api/v1/changePassword', 'POST', {email, oldPass, newPass, role:'vendor'}, (err, res)=>{
            if ( err ){
                cb(err, null);
                return;
            }

            // localStorage.token = res.Token;
            // localStorage.user = res;
            cb(null, res)
        })
    },
    updateProfile(userData, cb){
        this.baseApi('/api/v1/vendors', 'PUT', userData, (err, res)=>{
            if ( err ){
                cb(err, null);
                return;
            }
            localStorage.user = JSON.stringify({user:res});
            cb(null, res)
        })
    },
    forgotPassword(email, cb){
        this.baseApi(`/api/v1/forgotPassword?username=${email}&role=vendor`, 'GET', {}, cb)
    },
    getToken(){
        return localStorage.token;
    },
    logout(){
        delete localStorage.token;
        delete localStorage.user;
    },
    loggedIn(){
        return !!localStorage.token;
    },
    getCurrentUser(){
        if (this.loggedIn()){
            return JSON.parse(localStorage.user);
        }
        return null;
    },




    ////////////
    // common //
    ////////////

    uploadImage(url, cb){

    },

    getOrders(vendorId, bookDate, cb){
        this.baseApi(`/api/v1/orders/bookdate?vendorId=${vendorId}`+ (bookDate!=null?`&date=${bookDate}`:''), 'GET', {}, cb)
    },
    getOrdersbyCustomer(vendorId, customerId, cb){
        this.baseApi(`/api/v1/orders/bookdate?vendorId=${vendorId}&customerId=${customerId}`, 'GET', {}, cb)
    },
    getCustomer(vendorId, cb){
        this.baseApi('/api/v1/vendors/customer?vendorId='+vendorId, 'GET', {}, cb)
    },
    getTimeTable(vendorId, date, cb){
        this.baseApi(`/api/v1/timetable/date?vendorId=${vendorId}&date=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`, 'GET', {}, cb)
    },
    addNotTaking(data, cb){
        this.baseApi('/api/v1/specialtimes', 'POST', data, cb)
    },
    removeNotTaking(id, cb){
        this.baseApi('/api/v1/specialtimes/'+id, 'DELETE', {}, cb)
    },
    getOpenTime(vendorId, cb){
        this.baseApi('/api/v1/vendors/worktime?vendorId='+vendorId, 'GET', {}, cb)
    },
    updateOpenTime(data, cb){
        this.baseApi('/api/v1/vendors/worktime', 'POST', data, cb)
    },
    addDevice(data, cb){
        this.baseApi('/api/v1/vendorDevices/insert', 'POST', data, cb)
    },
    removeDevice(id, cb){
        this.baseApi('/api/v1/vendorDevices/'+id, 'DELETE', {}, cb)
    },
    getDevices(vendorId, cb){
        this.baseApi('/api/v1/vendorDevices?vendorId='+vendorId, 'GET', {}, cb)
    },
    getDeviceList(cb){
        this.baseApi('/api/v1/devices','GET', {}, cb)
    },
    getPricingList(vendorId, cb){
        this.baseApi('/api/v1/vendorPricing?vendorId='+vendorId, 'GET', {}, cb)
    },
    getServiceList(cb){
        this.baseApi('/api/v1/services','GET', {}, cb)
    },
    getModelList(cb){
        this.baseApi('/api/v1/models','GET', {}, cb)
    },
    getMakeList(cb){
        this.baseApi('/api/v1/makes','GET', {}, cb)
    },
    addPricing(data, cb){
        this.baseApi('/api/v1/vendorPricing/field','PUT', data, cb)
    },
    updatePricing(data, cb){
        this.baseApi('/api/v1/vendorPricing','PUT', data, cb)
    },
    updateSpecialDay(data, cb){
        this.baseApi('/api/v1/vendors/worktime', 'POST', data, cb)
    },
    searchOrder(data, cb){
        this.baseApi('/api/v1/orders/job', 'POST', data, cb)
    },
    updateOrderStatus(data, cb){
        this.baseApi('/api/v1/orders/update_status', 'PUT', data, cb)
    },
    getJobLog(orderId, cb){
        this.baseApi('/api/v1/joblogs?orderId='+orderId, 'GET', {}, cb)
    },
    postProduct(data, cb){
        this.baseApi('/api/v1/products/byvendor', 'POST', data, cb)
    },
    getSoldOut(id, cb){
        this.baseApi('/api/v1/products/soldout/byvendor?VendorId='+id, 'GET',{}, cb)
    },
    getProducts(data, cb){
        this.baseApi('/api/v1/products/sell', 'POST', data, cb)
    },
    updateProduct(data, cb){
        this.baseApi('/api/v1/products/update/byvendor', 'POST', data, cb)
    },
    sendSMS(json_data, cb){
      json_data.apikey = Config.TEXTLOCAL_API_KEY
      json_data.sender = "mydevicerepair.org"
      json_data.test = true
      let request = {
          url: Config.TEXTLOCAL_SEND_API_URL,
          method: 'POST',
          contentType:"application/json",
          dataType:"json"
      }
      request['data'] = JSON.stringify(json_data);

      console.log(request)
      $.ajax(request).then((res)=>{
          if (cb) cb(null, res)
      }, (error) => {
          if (cb) cb(error.responseJSON , null)
      })
    }
}

module.exports = VendorApi;
