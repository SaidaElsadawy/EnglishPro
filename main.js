const whatsappNumber = "201032157496";
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;
  const day = document.getElementById("day").value;
  const time = document.getElementById("time").value;
  const msg = `مرحبًا، أريد حجز حصة تجريبية.\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالكورس: ${course}\nاليوم: ${day}\nالوقت: ${time}`;
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
});
document.querySelectorAll(".faq button").forEach((btn) =>
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
    btn.querySelector("span").textContent =
      answer.style.display === "block" ? "−" : "＋";
  }),
);

// ===========================
 