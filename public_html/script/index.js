// Copyright 2023 Justin Hu
//
// This file is part of the First National Bank of Airedalandia.
//
// The First National Bank of Airedalandia is free software: you can
// redistribute it and/or modify it under the terms of the GNU Affero General
// Public License as published by the Free Software Foundation, either version
// 3 of the License, or (at your option) any later version.
//
// The First National Bank of Airedalandia is distributed in the hope that it
// will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
// General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with the First National Bank of Airedalandia. If not, see
// <https://www.gnu.org/licenses/>.
//
// SPDX-License-Identifier: AGPL-3.0-or-later

addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("login-show-password")
    .addEventListener("change", () => {
      document
        .getElementById("login-password")
        .setAttribute(
          "type",
          document.getElementById("login-show-password").checked
            ? "text"
            : "password"
        );
    });
  document.getElementById("login-submit").addEventListener("click", () => {
    document.getElementById("login-error").setAttribute("hidden", "");

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email === "") {
      document.getElementById("login-error-message").innerText =
        "Missing email";
      document.getElementById("login-error").removeAttribute("hidden");
      return;
    }

    if (password === "") {
      document.getElementById("login-error-message").innerText =
        "Missing password";
      document.getElementById("login-error").removeAttribute("hidden");
      return;
    }

    alert(`TODO: log in using email = ${email} and password = ${password}`);
  });
  document.getElementById("login-toggle").addEventListener("click", () => {
    document.getElementById("login-form").setAttribute("hidden", "");
    document.getElementById("register-form").removeAttribute("hidden");
  });
  document
    .getElementById("register-show-password")
    .addEventListener("change", () => {
      const inputType = document.getElementById("register-show-password")
        .checked
        ? "text"
        : "password";
      document
        .getElementById("register-password-1")
        .setAttribute("type", inputType);
      document
        .getElementById("register-password-2")
        .setAttribute("type", inputType);
    });
  document.getElementById("register-submit").addEventListener("click", () => {
    document.getElementById("register-error").setAttribute("hidden", "");

    const email = document.getElementById("register-email").value;
    const password1 = document.getElementById("register-password-1").value;
    const password2 = document.getElementById("register-password-2").value;

    if (email === "") {
      document.getElementById("register-error-message").innerText =
        "Missing email";
      document.getElementById("register-error").removeAttribute("hidden");
      return;
    }

    if (password1 === "") {
      document.getElementById("register-error-message").innerText =
        "Missing password";
      document.getElementById("register-error").removeAttribute("hidden");
      return;
    }

    if (password1 !== password2) {
      document.getElementById("register-error-message").innerText =
        "Passwords do not match";
      document.getElementById("register-error").removeAttribute("hidden");
      return;
    }

    if (!document.getElementById("register-tandc-agreed").checked) {
      document.getElementById("register-error-message").innerText =
        "You must read and agree to the terms and conditions";
      document.getElementById("register-error").removeAttribute("hidden");
      return;
    }

    alert(`TODO: register using email = ${email} and password = ${password1}`);
  });
  document.getElementById("register-toggle").addEventListener("click", () => {
    document.getElementById("register-form").setAttribute("hidden", "");
    document.getElementById("login-form").removeAttribute("hidden");
  });
});
