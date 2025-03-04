function maskUsername(username, currentUserId, userId) {
    if (!username || username.length <= 2) return username;
    if (userId && userId === currentUserId) return username;
    return username[0] + '*****' + username[username.length - 1];
}
