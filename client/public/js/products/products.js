Vue.component('w-ckeditor-vue', window['w-ckeditor-vue'])
var Main = {
    data() {
        return {
            tableData: [],
            //form

            productForm: {
                code: '',
                name: '',
                image: '',
                category: [],
                describe: '',
                content: '',
                price: '',
                percentDiscount: 0,
                view: '',
                active: true,
            },

            createAPIForm: {
                link: '',
                user: '',
                password: '',
                key: ''
            },

            settingForm: {
                bgcolor: false,
                bgcolorMain: '',
                fonts: ''   
            },

            settingPassForm: {
                btn: [],
                userAccess: [],
                userEditPassword: [],
                password: '',
                resPassword: ''
            },

            noteForm: {
                content: '',
                status: 'Bình Thường',
                title: '',
                date: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
            },

            //validate
            productValidate: {
                name: [
                    { 
                        required: true,
                        message: 'Vui lòng nhập tên sản phẩm', 
                        trigger: 'blur' 
                    },
                    { 
                        max: 200, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'blur' 
                    }
                ],
                code: [
                    {
                        max: 10, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'blur' 
                    },
                ],
                describe: [
                    { 
                        max: 500, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'blur' 
                    },
                ],
                describe: [
                    { 
                        max: 500, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'blur' 
                    },
                ],
                percentDiscount: [
                    {
                        pattern: /^[0-9]$|^[1-9][0-9]$|^(100)$/,
                        message: 'Chỉ nhập số từ 0 - 100',
                        trigger: 'blur' 
                    },
                ],
                price: [
                    {
                        required: true,
                        message: 'Vui lòng nhập giá sản phẩm', 
                        trigger: 'blur' 
                    },
                    {
                        pattern: /^[0-9]*$/,
                        message: 'Không được phép nhập chữ',
                        trigger: 'blur' 
                    },
                ],
            },

            apiValidate: {

            },

            settingValidate: {

            },

            settingPassValidate: {
                password: [
                    { 
                        max: 35, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'blur' 
                    }
                ],
                respassword: [
                    { 
                        max: 35, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'blur' 
                    }
                ],
            },

            noteValidate: {
                title: [
                    { 
                        required: true,
                        message: 'Vui lòng nhập tiêu đề', 
                        trigger: 'blur' 
                    }
                ],
                content: [
                    { 
                        required: true,
                        message: 'Vui lòng nhập nội dung', 
                        trigger: 'blur' 
                    }
                ],
            },


            listData: {

                tableHistory: [
                    {
                        userCreate: 'Phương Vy',
                        content: 'Phương Vy đã thay đổi một sản phẩm',
                        ip: '178.259.367.1.2',
                        dateCreate: '10/09/2021'
                    },
                    {
                        userCreate: 'Phương Vy',
                        content: 'Phương Vy đã thay đổi một sản phẩm',
                        ip: '178.259.367.1.2',
                        dateCreate: '10/09/2021'
                    },
                    {
                        userCreate: 'Phương Vy',
                        content: 'Phương Vy đã thay đổi một sản phẩm',
                        ip: '178.259.367.1.2',
                        dateCreate: '10/09/2021'
                    },
                    {
                        userCreate: 'Phương Vy',
                        content: 'Phương Vy đã thay đổi một sản phẩm',
                        ip: '178.259.367.1.2',
                        dateCreate: '10/09/2021'
                    },
                    {
                        userCreate: 'Phương Vy',
                        content: 'Phương Vy đã thay đổi một sản phẩm',
                        ip: '178.259.367.1.2',
                        dateCreate: '10/09/2021'
                    },
                    {
                        userCreate: 'Phương Vy',
                        content: 'Phương Vy đã thay đổi một sản phẩm',
                        ip: '178.259.367.1.2',
                        dateCreate: '10/09/2021'
                    },
                ],

                // tabs
                tabsMain: [
                    {
                        name: 'all',
                        label: 'Tất cả sản phẩm'
                    }, 
                    {
                        name: 'follow',
                        label: 'Theo dõi'
                    }, 
                    {
                        name: 'attention',
                        label: 'Chú ý'
                    }, 
                    {
                        name: 'trash',
                        label: 'Thùng rác'
                    }
                ],

                tabsHistory: [
                    {
                        name: 'allHis',
                        label: 'Tổng Lịch Sử',
                    }, 
                    {
                        name: 'accessHis',
                        label: 'Lịch Sử Truy Cập'
                    }, 
                    {
                        name: 'hisChange',
                        label: 'Lịch Sử Thay Đổi'
                    }
                ],
                // option
                optionsAction: [
                    {
                        value: 'all',
                        label: 'Tất cả sản phẩm'
                    }, 
                    {
                        value: 'follow',
                        label: 'Theo dõi'
                    }, 
                    {
                        value: 'attention',
                        label: 'Chú ý'
                    }, 
                    {
                        value: 'trash',
                        label: 'Thùng rác'
                    }
                ],

                optionsCategory: [
                    {
                        value: '1',
                        label: 'Máy tính'
                    }, 
                    {
                        value: '2',
                        label: 'Bàn phím'
                    }, 
                    {
                        value: '3',
                        label: 'Chuột'
                    }, 
                    {
                        value: '4',
                        label: 'Ổ cứng'
                    }
                ],

                optionsFunction: [
                    {
                        label: 'Thêm sản phẩm',
                        value: '1',
                    },
                    {
                        label: 'Thêm API',
                        value: '2',
                    },
                    {
                        label: 'Thêm tải lên',
                        value: '3',
                    },
                    {
                        label: 'Cài đặt',
                        value: '4',
                    },
                    {
                        label: 'Cài đặt giao diện',
                        value: '5',
                    },
                    {
                        label: 'Cài đặt mật khẩu',
                        value: '6',
                    }
                ],

                optionsUser: [
                    {
                        value: 'tan.hm',
                        label: 'tan.hm',
                    }
                ],


                optionsFont: [
                    {
                        value: '1',
                        label: 'Vn Book Atiqua'
                    },
                    {
                        value: '2',
                        label: 'Vn Arabia'
                    },
                    {
                        value: '3',
                        label: 'Vn HelvetIns'
                    },
                    {
                        value: '4',
                        label: 'Vn Lincoln'
                    },
                    {
                        value: '5',
                        label: 'Vn Teknical'
                    },
                    {
                        value: '6',
                        label: 'Vn Tifany'
                    },
                    {
                        value: '7',
                        label: 'Vn Koala'
                    }
                ],

                // radio
                radioStatus: [
                    {
                        label: 'Rất Quan Trọng',
                        name: 'veryimportant'
                    },
                    {
                        label: 'Quan Trọng',
                        name: 'important'
                    },
                    {
                        label: 'Bình Thường',
                        name: 'normal'
                    }
                ],
                
                //table
                indexTableAPI: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                    },
                ],

                //Timeline
                        
                timelineHistory: [
                    {
                        contents: 'Phương Vy đã thay đổi sản phẩm',
                        timestamp: '02/10/2021'
                    }, 
                    {
                        contents: 'Phương Vy đã thay đổi sản phẩm',
                        timestamp: '02/10/2021'
                    }, 
                    {
                        contents: 'Phương Vy đã thay đổi sản phẩm',
                        timestamp: '02/10/2021'
                    },
                    {
                        contents: 'Phương Vy đã thay đổi sản phẩm',
                        timestamp: '02/10/2021'
                    },
                    {
                        contents: 'Phương Vy đã thay đổi sản phẩm',
                        timestamp: '02/10/2021'
                    }
                ],
            },

            multipleSelection: [],
            activeName: 'all',
            activeSetting: 'display',
            activeDetail: 'info',
            activeHis: 'allHis',
            search: '',
            valueAction: '',
            valueCategory: '',
            dialogFormCreateProduct: false,
            dialogFormEditProduct: false,
            dialogFormDetailProduct: false,
            dialogFormNoteProduct: false,
            num: 1,
            labelposition: 'top',
            isCreate: false,
            isCreateAPI: false,
            isSettingForm: false,
            isEditForm: false,
            isDisplayEdit: false,
            isUploadImage: false,
            loadingForm: false, 
            loadingTable: false,
            activeCollapse: ['1', '2', '3'],
            progress: 0,
            isProgressCreateAPI: false,
            reverseHistory: true,
            bg: '#FFF',
            title: '',
            textSettingcolor: '',
            bgSettingcolor: '',
            textAPIcolor: '',
            bgAPIcolor: '',
            textcolor: '',
            bgcolor: '',
            textDisplaycolor: '',
            bgDisplaycolor: '',
            textEditcolor: '',
            bgEditcolor: '',
            activeColor: '',
            activeText: '',
            followColor: '',
            followText: '',
            noteColor: '',
            noteText: '',
            binColor: '',
            binText: '',
            titlelabel: '',
            code: '',
            name: '',
            image: '',
            category: '',
            describe: '',
            content: '',
            price: '',
            percentDiscount: '',
            view: '',
            active: '',
            dateCreate: '',
            dateModified: '',
            userCreate: '',
            userModified: '',
            imageUpload: 'images/img/no-image.gif',
        }
    },
    mounted() {
        this.loadIndexProduct();
    },
    methods: {

        refreshForm() {
            this.productForm = {
                code: '',
                name: '',
                image: '',
                category: [],
                describe: '',
                content: '',
                price: '',
                percentDiscount: 0,
                view: '',
                active: true,
            }
        },
        //Hiển Thị Ảnh
        uploadimage(productForm)
        {
            let that = this;
            that.isUploadImage = true;
            const file = document.querySelector('input[type=file]').files[0];
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                // convert image file to base64 string
                that.imageUpload = reader.result;
            }, false);
        
            if (file) {
                reader.readAsDataURL(file);
            }
            that.productForm.image = file;
        },

        deleteUploadImage(productForm) {
            let that = this;
            that.imageUpload = 'images/img/no-image.gif';
            that.productForm.image = null;
            that.isUploadImage = false;
        },

        //Đổi màu
        changeBg(settingForm) {
            if(this.settingForm.bgcolor)
            {
                this.bg = "lightslategray";
            }
            else
            {
                this.bg = "";
            }
        },

        //Thao tác chuyển
        handleChangeView(value) {
            console.log(value)
        },

        handleRemove(file, fileList) {
            console.log(file, fileList);
        },

        handlePreview(file) {
            console.log(file);
        },

        handleChange(val) {
            console.log(val);
        },

        //clean
        cleanForm() {
            let that = this;
            that.isCreate = false;
            that.isCreateAPI = false;
            that.isSettingForm = false;
            that.isEditForm = false;
            that.isDisplayEdit = false;
            that.textcolor = '';
            that.bgcolor = '';
            that.textAPIcolor = '';
            that.bgAPIcolor = '';
            that.textSettingcolor = '';
            that.bgSettingcolor = '';
            that.textDisplaycolor = '';
            that.bgDisplaycolor = '';
            that.textEditcolor = '';
            that.bgEditcolor = '';
        },

        cleanDialog() {
            let that = this;
            that.dialogFormCreateProduct = false;
            that.dialogFormDetailProduct = false;
            that.dialogFormEditProduct = false;
            that.dialogFormNoteProduct = false;
        },
        //Thao tác click form
        clickBtnCreate() {
            let that = this;
            this.cleanForm();
            this.refreshForm();
            that.dialogFormCreateProduct = true;
            that.isCreate = true;
            that.title = "Thêm Sản Phẩm";
            that.textcolor = "#fff";
            that.bgcolor = "#909399";
            this.setTimeoutLoading();
        },

        clickBtnEdit(row) {
            let that = this;
            this.cleanForm();
            that.dialogFormEditProduct = true;
            that.isEditForm = true;
            that.textEditcolor = "#fff";
            that.bgEditcolor = "#909399";
            that.productForm = JSON.parse(JSON.stringify(row));
            that.title = "Sửa Sản Phẩm - " + row.name;
            this.setTimeoutLoading();
        },

        clickBtnDisplayEdit() {
            let that = this;
            this.cleanForm();
            that.dialogFormEditProduct = true;
            that.isDisplayEdit = true;
            that.textDisplaycolor = "#fff";
            that.bgDisplaycolor = "#909399";
            that.title = "Cài Đặt Sản Phẩm";
            this.setTimeoutLoading();
        },

        clickBtnDetail(row) {
            let that = this;
            that.dialogFormDetailProduct = true;
            that.productForm = JSON.parse(JSON.stringify(row));
            that.title = "Chi Tiết Sản Phẩm - " + row.name;

            that.code = row.code;
            that.name = row.name;
            that.image = row.image;
            that.category = row.category;
            that.price = row.price;
            that.view = row.view;
            that.describe = row.describe;
            that.content = row.content;
            that.dateCreate = row.dateCreate;
            that.dateModified = row.dateModified;
            that.userCreate = row.userCreate;
            that.userModified = row.userModified;
            that.active = row.active;
            that.bin = row.bin;
            that.follow = row.follow;
            that.note = row.note;
            
            this.setTimeoutLoading();

            that.activeText = row.active ? 'Hoạt Động' : 'Không Hoạt Động';
            that.activeColor = row.active ? 'success' : 'default';

            that.followText = row.follow ? 'Theo Dõi' : 'Không Có Theo Dõi';
            that.followColor = row.follow ? 'success' : 'default';

            that.noteText = row.note ? 'Chú Ý' : 'Không Chú Ý';
            that.noteColor = row.note ? 'warning' : 'default';

            that.binText = row.bin ? 'Yes' : 'No';
            that.binColor = row.bin ? 'danger' : 'default';
        },

        clickBtnCreateAPI() {
            let that = this;
            this.cleanForm();
            that.dialogFormCreateProduct = true;
            that.isCreateAPI = true;
            that.title = "Thêm Sản Phẩm Bằng API";  
            that.textAPIcolor = "#fff";
            that.bgAPIcolor = "#909399";
            this.setTimeoutLoading();
        },

        clickBtnSettingForm() {
            let that = this;
            this.cleanForm();
            that.dialogFormCreateProduct = true;
            that.isSettingForm = true;
            that.title = "Cài Đặt";  
            that.textSettingcolor = "#fff";
            that.bgSettingcolor = "#909399";
            this.setTimeoutLoading();
        },

        clickBtnFollow () {
            
        },
        
        clickBtnNote (row) {
            let that = this;
            that.dialogFormNoteProduct = true;
            that.title = "Thêm Ghi Chú Sản Phẩm - " + row.name;
            this.setTimeoutLoading();
        },

        clickBtnDelete(row) {
            const that = this;
            that.$confirm('Bạn Muốn Xoá Sản Phẩm - '+ row.name +' ?', 'Thông Báo', {
                confirmButtonText: 'Xác Nhận',
                cancelButtonText: 'Huỷ Bỏ',
                type: 'warning',
                center: true
                }).then(() => {
                this.$notify({
                    title: 'Success',
                    message: 'This is a success message',
                    type: 'success'
                });
                }).catch(() => {
                this.$notify.error({
                    title: 'Error',
                    message: 'This is an error message'
                });
            });
        },
        // Load Form
        loadIndexProduct() {
            let that = this;
            const link = '/product/index'
            axios.get(link)
                .then(function (response) {
                // handle success
                console.log(response.data);
                    that.tableData = response.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        },


        //Thao tác form

        createProduct(productForm) {
            let that = this;
            that.$refs[productForm].validate((valid) => {
                if (valid) {
                    const formData = new FormData();
                    formData.append('file', that.productForm.image);
                    const link = '/product/create';
                    axios.post(link, formData , {
                        params: JSON.parse(JSON.stringify(that.productForm))
                    })
                    .then(function (response) {
                        // handle success
                        that.loadIndexProduct();
                        that.$notify({
                            title: 'Thông Báo',
                            message: 'Thêm Sản Phẩm Thành Công!',
                            type: 'success'
                        });
                    })
                    .catch(function (error) {
                        // handle error
                        console.log('error submit!!');
                    })
                    .then(function () {
                        // always executed
                    }); 
                } else {
                    that.$notify.error({
                        title: 'Thông Báo',
                        message: 'Lỗi! Không Thể Thêm Sản Phẩm'
                    });
                return false;
                }
                this.dialogFormCreateProduct = false;
            });
        },

        editProduct(productForm) {
            let that = this;
            that.$refs[productForm].validate((valid) => {
                if (valid) {
                    console.log(this.productForm);
                } else {
                    console.log('error submit!!');
                return false;
                }
            });
        },


        createAPIProduct(createAPIForm) {
            let that = this;
            that.isProgressCreateAPI = true;
            that.loadingTable = true;
            that.$refs[createAPIForm].validate((valid) => {
                if (valid) {
                    console.log(this.createAPIForm);
                    // $.ajax({
                    //     url: this.createAPIForm.link,
                    //     type: "GET",
                    //     dataType: 'json',
                    //     async: true,
                    //     contentType: 'application/json; charset=UTF-8',
                    //     success: function (rs) {
                    //         var data = JSON.parse(JSON.stringify(rs))

                    //         data.forEach((item, index) => {
                    //             setTimeout(function(){
                    //                 that.progress = index + 1;
                    //                 that.listData.indexTableAPI.push(item);
                    //             }, 1000);
                    //         })
                    //         that.loadingTable = false;
                    //     },
                    //     error: function (xhr, status, err) { }
                    // });
                    axios.get(this.createAPIForm.link)
                    .then(function (response) {
                            // handle success
                            console.log(response.data);
                            setTimeout(function(){
                                that.listData.indexTableAPI = response.data;
                                that.progress = that.listData.indexTableAPI.length;
                            }, 1000);
                            that.loadingTable = false;
                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                        .then(function () {
                            // always executed
                        });
                } else {
                    console.log('error submit!!');
                return false;
                }
            });
        },

        createSettingPass(settingPassForm) {
            alert('Xác Nhận Thành Công');
        },

        createNoteProduct(noteForm) {
            let that = this;
            that.$refs[noteForm].validate((valid) => {
                if (valid) {
                    console.log(this.noteForm);
                    this.$notify({
                        title: 'Thông Báo',
                        message: 'Thêm Ghi Chú Thành Công',
                        type: 'success'
                    });
                } else {
                    console.log('error submit!!');
                    this.$notify.error({
                        title: 'Thông Báo',
                        message: 'Chưa Có Ghi Chú Nào Được Thêm'
                    });
                return false;
                }
            });
        },

        //handleClick
        handleClickDetails() {
            let that = this;
            that.activeHis = 'allHis';
            if(that.activeDetail == 'history')
            {
                that.titlelabel = "Tổng Lịch Sử";
            }
            else
            {
                console.log("Lỗi!!!!");
            }
        },

        handleClickHistory() {
            let that = this;
            if(that.activeHis == 'accessHis')
            {
                that.titlelabel = "Lịch Sử Truy Cập";
            }
            else if(that.activeHis == 'hisChange')
            {
                that.titlelabel = "Lịch Sử Thay Đối";
            }
            else if(that.activeHis == 'allHis')
            {
                that.titlelabel = "Tổng Lịch Sử";
            }
            else
            {
                console.log("Lỗi!!!!");
            }
        },

        handleClickMain() {
            console.log(object);
        },

        //SetTimeOut
        setTimeoutLoading() {
            let that = this;
            that.loadingForm = true;

            setTimeout(function(){
                that.loadingForm = false;
            }, 1000);
        },

        //remove
        removeRowAPI(index, rows) {
            rows.splice(index, 1);
        },

        resetProductForm(productForm) {
            let that = this;
            that.$refs[productForm].resetFields();
        },

        sumMoney(productForm) {
            let that = this;
            const price = (that.productForm.price * ((100 - that.productForm.percentDiscount) / 100));
            const sumPrice = price.toLocaleString('it-IT',
                {
                    style: 'currency',
                    currency: 'VND'
                });
            return sumPrice;
        },
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')