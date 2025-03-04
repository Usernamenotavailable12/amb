function maskUsername(username, userId) {
    if (!username || username.length <= 2) return username;
    if (userId && userId === extractAuthDataFromCookie().userId) return username;
    return username[0] + '*****' + username[username.length - 1];
}
