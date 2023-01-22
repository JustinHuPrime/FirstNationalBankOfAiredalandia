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
  document.getElementById("login-submit").addEventListener("click", () => {
    // TODO: make some post request
  });
  document.getElementById("login-toggle").addEventListener("click", () => {
    document.getElementById("login-form").setAttribute("hidden", "");
    document.getElementById("register-form").removeAttribute("hidden");
  });
  document.getElementById("register-submit").addEventListener("click", () => {
    // TODO
  });
  document.getElementById("register-toggle").addEventListener("click", () => {
    document.getElementById("register-form").setAttribute("hidden", "");
    document.getElementById("login-form").removeAttribute("hidden");
  });
});