import * as pulumi from "@pulumi/pulumi";
export declare class SsoDefaultRoles extends pulumi.CustomResource {
    /**
     * Get an existing SsoDefaultRoles resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SsoDefaultRolesState, opts?: pulumi.CustomResourceOptions): SsoDefaultRoles;
    /**
     * Returns true if the given object is an instance of SsoDefaultRoles.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SsoDefaultRoles;
    /**
     * Set of default role names for the SSO configuration. These roles will be assigned by default to users who sign up via SSO.
     */
    readonly roles: pulumi.Output<string[]>;
    /**
     * The ID of the associated SSO configuration.
     */
    readonly ssoConfigId: pulumi.Output<string>;
    readonly ssoDefaultRolesId: pulumi.Output<string>;
    /**
     * Create a SsoDefaultRoles resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SsoDefaultRolesArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SsoDefaultRoles resources.
 */
export interface SsoDefaultRolesState {
    /**
     * Set of default role names for the SSO configuration. These roles will be assigned by default to users who sign up via SSO.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the associated SSO configuration.
     */
    ssoConfigId?: pulumi.Input<string>;
    ssoDefaultRolesId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SsoDefaultRoles resource.
 */
export interface SsoDefaultRolesArgs {
    /**
     * Set of default role names for the SSO configuration. These roles will be assigned by default to users who sign up via SSO.
     */
    roles: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the associated SSO configuration.
     */
    ssoConfigId: pulumi.Input<string>;
    ssoDefaultRolesId?: pulumi.Input<string>;
}
