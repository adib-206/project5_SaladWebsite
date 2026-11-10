// const themeBtn = document.getElementById("theme-btn");
// const iconMoon = document.querySelector(".icon-moon");
// const iconSun = document.querySelector(".icon-sun");

// if (themeBtn) {
//   themeBtn.addEventListener("click", () => {
//     // إضافة أو إزالة كلاس dark-mode من الـ body
//     document.body.classList.toggle("dark-mode");

//     const isDarkMode = document.body.classList.contains("dark-mode");

//     if (isDarkMode) {
//       // إظهار الشمس وإخفاء القمر
//       iconMoon.style.setProperty("display", "none", "important");
//       iconSun.style.setProperty("display", "inline-block", "important");
//     } else {
//       // إظهار القمر وإخفاء الشمس
//       iconMoon.style.setProperty("display", "inline-block", "important");
//       iconSun.style.setProperty("display", "none", "important");
//     }
//   });
// }

// // --- التعديل السحري هنا: تفعيل رسالة تأكيد الطلب فقط إذا كان الزر موجوداً ---
// const orderBtn = document.querySelector(".btn-order");
// if (orderBtn) {
//   orderBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     alert("Order window initialized! 🥗");
//   });
// }

// // --- تفعيل زر الصعود لأعلى (Back to Top) ---
// const backToTopBtn = document.getElementById("back-to-top");

// if (backToTopBtn) {
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 300) {
//       backToTopBtn.classList.add("show");
//     } else {
//       backToTopBtn.classList.remove("show");
//     }
//   });

//   // عند الضغط على الزر يتم الصعود للأعلى بسلاسة
//   backToTopBtn.addEventListener("click", () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
// }

const themeBtn = document.getElementById("theme-btn");
const iconMoon = document.querySelector(".icon-moon");
const iconSun = document.querySelector(".icon-sun");

// ==========================================
// 1. قراءة السمة المحفوظة (الوضع الفاتح أو الداكن) عند تحميل الصفحة
// ==========================================
const currentTheme = localStorage.getItem("theme");

// التحقق مما إذا كان المستخدم قد اختار الوضع الداكن مسبقاً
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  if (iconMoon && iconSun) {
    iconMoon.style.setProperty("display", "none", "important");
    iconSun.style.setProperty("display", "inline-block", "important");
  }
} else {
  // الوضع الفاتح هو الافتراضي
  if (iconMoon && iconSun) {
    iconMoon.style.setProperty("display", "inline-block", "important");
    iconSun.style.setProperty("display", "none", "important");
  }
}

// ==========================================
// 2. تحديث السمة عند الضغط على الزر وحفظها في Local Storage
// ==========================================
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    // التبديل بين الكلاسات
    document.body.classList.toggle("dark-mode");

    // التحقق من الحالة الجديدة بعد الضغط
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
      // إظهار الشمس وإخفاء القمر
      if (iconMoon) iconMoon.style.setProperty("display", "none", "important");
      if (iconSun)
        iconSun.style.setProperty("display", "inline-block", "important");

      // حفظ الخيار في اللوكال ستوريج ليتذكره المتصفح
      localStorage.setItem("theme", "dark");
    } else {
      // إظهار القمر وإخفاء الشمس
      if (iconMoon)
        iconMoon.style.setProperty("display", "inline-block", "important");
      if (iconSun) iconSun.style.setProperty("display", "none", "important");

      // حفظ الخيار في اللوكال ستوريج ليتذكره المتصفح
      localStorage.setItem("theme", "light");
    }
  });
}

// ==========================================
// --- تفعيل رسالة تأكيد الطلب فقط إذا كان الزر موجوداً ---
// ==========================================
const orderBtn = document.querySelector(".btn-order");
if (orderBtn) {
  orderBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Order window initialized! 🥗");
  });
}

// ==========================================
// --- تفعيل زر الصعود لأعلى (Back to Top) ---
// ==========================================
const backToTopBtn = document.getElementById("back-to-top");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // عند الضغط على الزر يتم الصعود للأعلى بسلاسة
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
