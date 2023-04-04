self.addEventListener("install", (t) => {
  t.waitUntil(
    caches
      .open("static")
      .then((t) =>
        t.addAll([
          "./manifest.json",
          "./style.css",
          "./script.js",
          "./",
          "./cursor.js",
        ])
      )
  );
}),
  self.addEventListener("fetch", (t) => {
    t.respondWith(caches.match(t.request).then((e) => e || fetch(t.request)));
  });
