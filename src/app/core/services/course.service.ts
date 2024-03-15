import { Injectable } from "@angular/core";
import { TransferHttp } from "../transfer-http/transfer-http";
import { Course } from "src/app/models/models/course";
import { LinkSettings } from "src/app/library/linksetting/LinkSetting";
import { RepositoryModel } from "src/app/models/models/repository_base";
import { map } from "rxjs/operators";
import { CourseContent, CourseContentDetails } from "src/app/models/models/course-content";
import { ContentAndDetails, CourseContentWithDetails, GetCourseWithDetailsContent } from "src/app/models/respone_model/course-content-with-detail";
import { CourseEvaluation } from "src/app/models/models/course-evaluation";

@Injectable({ providedIn: 'root' })
export class CourseServices {
    constructor(
        private transferHttp: TransferHttp
    ) { }

    createCourse(model: Course) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'CreateCourse', model.id);
        return this.transferHttp.post(ApiUrl, model).pipe(map((res: RepositoryModel<boolean>) => res));
    }

    updateStatusCourse(model: Course) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'UpdateStatusCourse', model.id);
        return this.transferHttp.put(ApiUrl, model).pipe(map((res: RepositoryModel<boolean>) => res));
    }

    updateInformationCourse(model: Course) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'UpdateInformationCourse', model.id);
        return this.transferHttp.put(ApiUrl, model).pipe(map((res: RepositoryModel<boolean>) => res));
    }

    getListAllCourse() {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'GetListAllCourse');
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<Course[]>) => res));
    }

    getCourses(id: number) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'GetCourses', id, false);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<GetCourseWithDetailsContent>) => res));
    }

    createContentCourse(model: CourseContent) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'CreateContentCourse', model.id);
        return this.transferHttp.post(ApiUrl, model).pipe(map((res: RepositoryModel<boolean>) => res));
    }

    updateStatusContentCourse(model: CourseContent) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'UpdateStatusContentCourse', model.id);
        return this.transferHttp.put(ApiUrl, model).pipe(map((res: RepositoryModel<boolean>) => res));
    }

    updateInformationContentCourse(model: CourseContent) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'UpdateInformationContentCourse', model.id);
        return this.transferHttp.put(ApiUrl, model).pipe(map((res: RepositoryModel<boolean>) => res));
    }

    getListContentCourse(idCourse: number) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'GetListContentCourse', idCourse);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<ContentAndDetails[]>) => res));
    }

    getContentCourse(id: number) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'GetContentCourse', id);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<CourseContent[]>) => res));
    }

    createContentCourseDetails(model: CourseContentDetails) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'CreateContentCourseDetails');
        return this.transferHttp.post(ApiUrl, model).pipe(map((res: RepositoryModel<boolean>) => res));
    }

    updateStatusContentCourseDetails(model: CourseContentDetails) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'UpdateStatusContentCourseDetails', model.id);
        return this.transferHttp.put(ApiUrl, model).pipe(map((res: RepositoryModel<boolean>) => res));
    }

    updateInformationContentCourseDetails(model: CourseContentDetails) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'UpdateInformationContentCourseDetails', model.id);
        return this.transferHttp.put(ApiUrl, model).pipe(map((res: RepositoryModel<boolean>) => res));
    }

    getListContentCourseDetails(idContent: number) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'GetListContentCourseDetails', idContent);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<CourseContent[]>) => res));
    }

    getContentCourseDetails(id: number) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'GetContentCourseDetails', id);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<CourseContentDetails>) => res));
    }

    getListCourseAsCategory(idCategory: number) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'GetListCourseAsCategory', idCategory);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<Course[]>) => res));
    }

    addCommentOfStudentForCourse(model: CourseEvaluation) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'AddCommentOfStudentForCourse');
        return this.transferHttp.post(ApiUrl, model).pipe(map((res: RepositoryModel<boolean>) => res));
    }

    getListCourseEvaluation(idCourse: number) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'GetListCourseEvaluation', idCourse);
        return this.transferHttp.get(ApiUrl).pipe(map((res: RepositoryModel<CourseEvaluation[]>) => res));
    }

    likeForCommentCourse(id: number) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'LikeForCommentCourse', id);
        return this.transferHttp.putUrl(ApiUrl).pipe(map((res: RepositoryModel<boolean>) => res));
    }

    disLikeForCommentCourse(id: number) {
        const ApiUrl = LinkSettings.GetResLinkSetting('Course', 'DisLikeForCommentCourse', id);
        return this.transferHttp.putUrl(ApiUrl).pipe(map((res: RepositoryModel<boolean>) => res));
    }
}