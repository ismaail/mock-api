(function (window, document, $, undefined) {
  "use strict";

  $(document).ready(() => {

    let host = window.location.origin;

    let createButton = $("#input-create-button");
    let inputStatusCode = $("#input-status-code");
    let inputContentType = $("#input-content-type");
    let inputBody = $("#input-body");
    let messageBox = $("#message-infobox");
    let messageBoxContent = $(".content", messageBox);

    createButton.on('click', (e) => {
      e.preventDefault();

      let data = {
        status: inputStatusCode.val(),
        content: inputContentType.val(),
        body: inputBody.val(),
      };

      let request = {
        url: '/create',
        data: JSON.stringify(data),
        contentType: 'application/json'
      };

      $.post(request, (response) => {
        notify(response.id);
      }).fail(err => console.error('Error creating new API record', err));
    });

    /**
     * Show Success notification messahe
     * @param {String} id
     */
    let notify = (id) => {
      let url = `${host}/${id}`;
      messageBoxContent.html(`API record successfully created at <a href="${url}" target="_blank">${url}</a>`);
      messageBox.show();
    }
  });

}(this, this.document, jQuery));
