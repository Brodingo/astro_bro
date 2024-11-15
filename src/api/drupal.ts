import { Jsona } from "jsona";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import type { DrupalNode } from "../types";
import type { TJsonApiBody } from "jsona/lib/JsonaTypes";

// Get the Drupal base url
export const baseURL: string = import.meta.env.DRUPAL_BASE_URL;

/**
 * Fetch url from Drupal
 * 
 * @param url
 * 
 * @return Promise<TJsonaModel | TJsonaModel[]> as Promise<any>
 */
export const fetchUurl = async (url: string): Promise<any> => {
    const request: Response = await fetch(url);
    const json: string | TJsonApiBody = await request.json();
    const dataFormatter: Jsona = new Jsona();
    return dataFormatter.deserialize(json);
}