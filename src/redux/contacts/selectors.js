export const selectLoading = (state) => state.contacts.loading;

export const selectFilter = (state) => state.contacts.filter;

export const selectAllContacts = (state) => state.contacts.items;



// export const contactsReducer = contactsSlice.reducer;
// export const selectContacts = (state) => state.contacts.items;

// export const selectFilteredContacts = createSelector(
//   (state) => state.contacts.items,
//   (state) => state.filters.name,
//   (items, name) => {
//     const lowercasedFilter = name ? name.toLowerCase() : "";
//     return items.filter((contact) =>
//       contact.name.toLowerCase().includes(lowercasedFilter)
//     );
//   }
// );