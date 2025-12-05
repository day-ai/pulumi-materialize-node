import * as pulumi from "@pulumi/pulumi";
export declare class SsoDomain extends pulumi.CustomResource {
    /**
     * Get an existing SsoDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SsoDomainState, opts?: pulumi.CustomResourceOptions): SsoDomain;
    /**
     * Returns true if the given object is an instance of SsoDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SsoDomain;
    /**
     * The domain name for the SSO domain configuration. This domain will be used to validate the SSO configuration and needs to be unique across all SSO configurations.
     */
    readonly domain: pulumi.Output<string>;
    /**
     * The ID of the associated SSO configuration.
     */
    readonly ssoConfigId: pulumi.Output<string>;
    readonly ssoDomainId: pulumi.Output<string>;
    /**
     * Indicates whether the domain has been validated.
     */
    readonly validated: pulumi.Output<boolean>;
    /**
     * Create a SsoDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SsoDomainArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SsoDomain resources.
 */
export interface SsoDomainState {
    /**
     * The domain name for the SSO domain configuration. This domain will be used to validate the SSO configuration and needs to be unique across all SSO configurations.
     */
    domain?: pulumi.Input<string>;
    /**
     * The ID of the associated SSO configuration.
     */
    ssoConfigId?: pulumi.Input<string>;
    ssoDomainId?: pulumi.Input<string>;
    /**
     * Indicates whether the domain has been validated.
     */
    validated?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a SsoDomain resource.
 */
export interface SsoDomainArgs {
    /**
     * The domain name for the SSO domain configuration. This domain will be used to validate the SSO configuration and needs to be unique across all SSO configurations.
     */
    domain: pulumi.Input<string>;
    /**
     * The ID of the associated SSO configuration.
     */
    ssoConfigId: pulumi.Input<string>;
    ssoDomainId?: pulumi.Input<string>;
}
