import React from "react";

const headers = {
    "Authorization": `token  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`
}

export async function getUsers(currentPage, pageSize = 10) {
    const response = await fetch(`https://api.github.com/users?per_page=${pageSize}`)

    return response.json()
}

export async function getUser(userId) {
    const response = await fetch(`https://api.github.com/user/${userId}`)
    return await response.json()
}

export async function getAuth(){
    const response = await fetch(`https://api.github.com/user`, {
        "method": "GET",
        "headers": headers
    })

    return await response.json()
}

export async function followUser(username) {
    return await fetch(`https://api.github.com/user/following/${username}`, {
        method: "PUT",
        headers: headers,
    });
}

export async function unfollowUser(username) {
    return await fetch(`https://api.github.com/user/following/${username}`, {
        "method": "DELETE",
        "headers": headers,
    })
}

export async function checkIfFollows(username) {
    return await fetch(`https://api.github.com/user/following/${username}`, {
        "method": "GET",
        "headers": headers
    })
}

export async function getUserFollowers(username) {
    const response = await fetch(`https://api.github.com/users/${username}/followers`)
    return await response.json()
}

export async function getUserFollowing(username) {
    const response = await fetch(`https://api.github.com/users/${username}/following`)
    return await response.json()
}

export async function searchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    return await response.json()
}
