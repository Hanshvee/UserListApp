# 📌 Tech Highlights

## ✅ Fetch with Async/Await

Used the native `fetch` API along with `async/await` to handle asynchronous data fetching.

> As it's a small-scale application, there's no need to install additional libraries like Axios for handling promises.

## ✅ Native Stack Navigation

Implemented with `@react-navigation/native-stack`.

> Since the app currently transitions between only two screens (`UserList` and `UserDetails`), `native-stack` is a lightweight and efficient choice.

## ✅ Pull-to-Refresh with FlatList

Integrated pull-to-refresh functionality using the built-in `refreshing` and `onRefresh` props of `FlatList`.

> Improves UX by allowing users to reload the data without restarting the app.

## ✅ Basic Error Handling with Retry

Handled API failures gracefully by showing an error message and providing a retry button to reattempt the request.

> Ensures a better experience in case of network issues or API downtime.
