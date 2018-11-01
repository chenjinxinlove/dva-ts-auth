type Ret = Array</* ?,? */ any>;

declare namespace getRoutes{
	interface RetI {
		exact : boolean;
		key : string;
		path : string;
	}
}

/**
 *
 * @param val
 * @return
 */
declare function fixedZero(val : number): number;

/**
 *
 * @param type
 * @return
 */
declare function getTimeDistance(type : any): Ret;

/**
 *
 * @param nodeList
 * @param parentPath
 * @return
 */
declare function getPlainNode(nodeList : any, parentPath : any): Ret;

/**
 *
 * @param arg1
 * @param arg2
 * @return
 */
declare function accMul(arg1 : number, arg2 : number): number;

/**
 *
 * @param n
 * @return
 */
declare function digitUppercase(n : any): string;

/**
 *
 * @param str1
 * @param str2
 * @return
 */
declare function getRelation(str1 : string, str2 : string): number;

/**
 *
 * @param routes
 * @return
 */
declare function getRenderArr(routes : 0): Ret;

/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 * @param path
 * @param routerData
 * @return
 */
declare function getRoutes(path : string, routerData : any): Ret;

/**
 *
 */
declare function getPageQuery(): any;

/**
 *
 * @param path
 * @param query
 * @return
 */
declare function getQueryPath(path : any, query : any): any;

/**
 * eslint no-useless-escape:0
 */
export declare var reg : RegExp;

/**
 *
 * @param path
 * @return
 */
declare function isUrl(path : any): boolean;
