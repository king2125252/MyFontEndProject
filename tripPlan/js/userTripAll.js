function delTrip(e) {
  swal({
    title: "確定刪除行程?",
    text: "刪除後將無法復原",
    icon: "warning",
    buttons: {
      cancel: {
        text: "取消",
        visible: true
      },
      confirm: {
        text: "確定",
        value: true,
        visible: true,
        className: "",
        closeModal: false
      },
    },
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("成功刪除", {
        icon: "success",
      }).then(()=>{
        e.closest('form').submit();
      });
      
    }
  });

}