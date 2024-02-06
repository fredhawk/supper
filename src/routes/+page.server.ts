// import type { PageServerLoad, Actions } from "./$types";
//
// export const load: PageServerLoad = async (event) => {
// 	if (!event.locals.user) redirect(302, "/login");
// 	return {
// 		username: event.locals.user.username
// 	};
// };
// export const actions: Actions = {
// 	default: async (event) => {
// 		if (!event.locals.session) {
// 			return fail(401);
// 		}
// 		await auth.invalidateSession(event.locals.session.id);
// 		const sessionCookie = lucia.createBlankSessionCookie();
// 		context.cookies.set(sessionCookie.name, sessionCookie.value, {
// 			path: ".",
// 			...sessionCookie.attributes
// 		});
// 		redirect(302, "/login");
// 	}
// };

import { lucia } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, "/login");
	}
	return {
		user: event.locals.user
	};
};

export const actions: Actions = {
	default: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await lucia.invalidateSession(event.locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		});
		return redirect(302, "/login");
	}
};
