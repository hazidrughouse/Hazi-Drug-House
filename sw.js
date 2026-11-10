self.addEventListener("push", function (event) {
  let data = {};

  if (event.data) {
    data = event.data.json();
  }

  event.waitUntil(
    self.registration.showNotification(data.title || "Medispot BD", {
      body: data.body || "নতুন অর্ডার এসেছে!",
      icon: "/Hazi-Drug-House/favicon.png",
      data: {
        url: data.url || "https://hazidrughouse.github.io/Hazi-Drug-House/order.html"
      }
    })
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
